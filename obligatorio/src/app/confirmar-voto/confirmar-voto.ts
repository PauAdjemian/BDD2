import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpPM } from '../pop-up-pm/pop-up-pm';

@Component({
  selector: 'app-confirmar-voto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmar-voto.html',
  styleUrl: './confirmar-voto.css'
})
export class ConfirmarVoto {

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


  async votar() {
    console.log("lista id",  this.idListaSeleccionada)
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
      const papeleta = await fetch('http://localhost:3000/listas/papeleta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: this.idListaSeleccionada})
      });
      const data1 = await papeleta.json();
      console.log(data1.ID)
      // Validar circuito asignado
      const res = await fetch('http://localhost:3000/votantes/eleccion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(votante_eleccion)
      });

      const data = await res.json();
      const idPapeleta = data1.IDpapeleta;
      console.log('Circuito asignado:', data.circuito_asignado);

      if (data.circuito_asignado != IDcircuito) {
        alert('El circuito asignado no coincide con el circuito actual. Tu voto será marcado como observado.');
        this.observado = true;
      } else {
        this.observado = false;
      }

      

      // Preparar el voto
      const voto = {
        validez: 'válido',
        observado: this.observado,
        IDcircuito: parseInt(IDcircuito),
        IDpapeleta: idPapeleta,
        IDlista: this.idListaSeleccionada
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
      //this.router.navigate(['/votante']);
      this.close()

    } catch (err) {
      console.error('Error al votar', err);
      alert('Error al votar');
    }
  }
}