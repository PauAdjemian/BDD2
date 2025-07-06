import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pop-up-pm',
  imports: [CommonModule, FormsModule],
  templateUrl: './pop-up-pm.html',
  styleUrl: './pop-up-pm.css'
})
export class PopUpPM {

  fecha = new Date().toISOString().split('T')[0];
  ci: Number = 0;
  contrasenia: string = '';



  constructor(private router: Router) {}


  isVisible = false;

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  async irAVotante() {
    const parametros = {
      ID_circuito: Number(sessionStorage.getItem('nroCircuito')),
      ci: this.ci,
      fecha: this.fecha,
      contraseña: this.contrasenia
    };
    try {
      const response = await fetch('http://localhost:3000/integrantes/confirmarAutoridad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      });
      console.log('Parámetros enviados:', parametros)
      const data = await response.json();
      console.log('Datos recibidos:', data);
      if (response.ok) {
        console.log('Circuito obtenido:', data);
        if (data.autoridad){
            this.router.navigate(['/votante']);
        }
      } else {
        alert('Error al obtener el circuito');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al comunicarse con el servidor');
    }
  }

}
