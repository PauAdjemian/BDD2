import { Component, ViewChild } from '@angular/core';
import { ConfirmarUsuario } from "../confirmar-usuario/confirmar-usuario";
import { Datetime } from "../datetime/datetime";
import { FormsModule } from '@angular/forms';
import { NroCircuito } from '../nro-circuito/nro-circuito';


@Component({
  selector: 'app-log-in-votante',
  imports: [ConfirmarUsuario, Datetime, FormsModule],
  templateUrl: './log-in-votante.html',
  styleUrl: './log-in-votante.css'
})

export class LogInVotante {
  numero!: number;
  serie: string = '';
  ci!: number;
  tipoEleccion: string = '';
  fecha = new Date().toISOString().split('T')[0];

  @ViewChild('Popup') Popup!: ConfirmarUsuario;

  loginVotante() {
    if (!this.numero || !this.serie || !this.ci) {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (this.tipoEleccion !== 'Nacional' && this.tipoEleccion !== 'Departamental') {
      alert('Por favor selecciona un tipo de elección válido.');
      return;
    }

    fetch('http://localhost:3000/auth/votante', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        número: this.numero,
        serie: this.serie,
        ci: this.ci,
        fecha_elección: this.fecha,
        tipo_elección: this.tipoEleccion
      })
    })
    .then(res => {
      if (!res.ok) throw new Error('Credenciales incorrectas');
      return res.json();
    })
    .then(data => {
      if (data.autenticado) {
        sessionStorage.setItem('tipoEleccion', this.tipoEleccion);
        this.Popup.Confirmacion(this.ci);
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