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
        contraseña: this.contrasenia
      })
    })
    .then(res => {
      if (!res.ok) throw new Error('Credenciales incorrectas');
      return res.json();
    })
    .then(data => {
      if (data.autenticado) {
        this.router.navigate(['/abrir']);
      } else {
        alert('Credenciales incorrectas');
      }
    })
    .catch(err => {
      console.error(err);
      alert(err.message || 'Error de conexión');
    });
  }
}

