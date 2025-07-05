import { Component } from '@angular/core';
import { Datetime } from "../datetime/datetime";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in-admin',
  imports: [Datetime, FormsModule, CommonModule],
  templateUrl: './log-in-admin.html',
  styleUrl: './log-in-admin.css'
})
export class LogInAdmin {

  constructor(private router: Router) {}


  usuario: string = '';
  contrasenia: string = '';
  
  loginAdmin() {
    if (!this.usuario || !this.contrasenia) {
      alert('Por favor completa todos los campos.');
      return;
    }

    fetch('http://localhost:3000/auth/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.usuario,
        password: this.contrasenia
      })
    })
    .then(res => {
      if (!res.ok) throw new Error('Credenciales incorrectas');
      return res.json();
    })
    .then(data => {
      if (data.autenticado) {
        this.router.navigate(['/tareas']);
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
