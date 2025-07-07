import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voto-blanco',
  imports: [CommonModule, FormsModule],
  templateUrl: './voto-blanco.html',
  styleUrl: './voto-blanco.css'
})
export class VotoBlanco {

  @Input() idListaSeleccionada!: number;
  isVisible = false;
  observado: boolean = false;

  constructor(private router: Router) {}

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  async votarBlanco() {
    this.open()
    const IDcircuito = sessionStorage.getItem('nroCircuito');
    if (!IDcircuito) {
      alert('No se encontró el ID del circuito en sessionStorage');
      return;
    }

    const votante_eleccion = {
      CI_votante: sessionStorage.getItem('CI_votante'),
      fecha_elección: new Date().toISOString().split('T')[0],
      tipo_elección: sessionStorage.getItem('tipoEleccion')
    };

    try {
      const papeleta = await fetch('http://localhost:3000/listas/IDpapeleta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({tipo: 'en_blanco', fecha_elección: new Date(), tipo_elección: sessionStorage.getItem('tipoEleccion')})
      });
      const data1 = await papeleta.json();

      // Validar circuito asignado
      const res = await fetch('http://localhost:3000/votantes/eleccion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(votante_eleccion)
      });

      const data = await res.json();
      console.log('Circuito asignado:', data.circuito_asignado);

      if (data.circuito_asignado != IDcircuito) {
        alert('El circuito asignado no coincide con el circuito actual. Tu voto será marcado como observado.');
        this.observado = true;
      } else {
        this.observado = false;
      }

      // Preparar el voto
      const voto = {
        validez: 'en_blanco',
        observado: this.observado,
        IDcircuito: parseInt(IDcircuito),
        IDpapeleta: data1.IDpapeleta,
        IDlista: null
      };

      console.log('Enviando voto:', voto);

      // Enviar el voto
      const resVoto = await fetch('http://localhost:3000/votos/votar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voto)
      });

      const dataVoto = await resVoto.json();
      alert(dataVoto.message);

      // Cerrar el popup si todo salió bien
      this.router.navigate(['/votante']);

    } catch (err) {
      console.error('Error al votar', err);
      alert('Error al votar');
    }
  }
}
