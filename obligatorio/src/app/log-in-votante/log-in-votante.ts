import { Component, ViewChild } from '@angular/core';
import { ConfirmarUsuario } from "../confirmar-usuario/confirmar-usuario";
import { Datetime } from "../datetime/datetime";
import { FormsModule } from '@angular/forms';


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

  @ViewChild('Popup') Popup!: ConfirmarUsuario;

  loginVotante() {
    if (!this.numero || !this.serie || !this.ci) {
      alert('Por favor completa todos los campos.');
      return;
    }

    fetch('http://localhost:3000/auth/votante', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        número: this.numero,
        serie: this.serie,
        ci: this.ci
      })
    })
    .then(res => {
      if (!res.ok) throw new Error('Credenciales incorrectas');
      return res.json();
    })
    .then(data => {
      if (data.autenticado) {
        this.Popup.open();
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