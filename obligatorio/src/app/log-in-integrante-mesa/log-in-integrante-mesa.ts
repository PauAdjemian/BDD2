import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Datetime } from "../datetime/datetime";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-log-in-integrante-mesa',
  imports: [Datetime, FormsModule, CommonModule],
  templateUrl: './log-in-integrante-mesa.html',
  styleUrl: './log-in-integrante-mesa.css'
})
export class LogInIntegranteMesa {

  constructor(private router: Router) {}

  numero!: number;
  serie: string = '';
  contrasenia: string = '';
  fecha: string = new Date().toISOString().split('T')[0];
  
  loginIM() {
    if (!this.numero || !this.serie || !this.contrasenia) {
      alert('Por favor completa todos los campos.');
      return;
    }

    fetch('http://localhost:3000/auth/integrante', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        número: this.numero,
        serie: this.serie,
        contraseña: this.contrasenia,
        fecha: this.fecha
      })
    })
    .then(res => {
      if (!res.ok) throw new Error('INICIO DE SESIÓN FALLIDO');
      return res.json();
    })
    .then(data => {
      if (data.autenticado) {
        sessionStorage.setItem('circuito', data.circuito.toString());
        this.router.navigate(['/abrir']);
      } else {
        alert('INICIO DE SESIÓN FALLIDO');
      }
    })
    .catch(err => {
      console.error(err);
      alert(err.message || 'Error de conexión');
    });
  }
}

