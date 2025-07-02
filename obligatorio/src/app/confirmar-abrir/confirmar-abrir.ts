import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-abrir',
  imports: [CommonModule],
  templateUrl: './confirmar-abrir.html',
  styleUrl: './confirmar-abrir.css'
})
export class ConfirmarAbrir {

  constructor(private router: Router) {}


  isVisible = false;

  close() {
    this.isVisible = false;
  }

  open() {
    this.isVisible = true;
  }

  irACerrar() {
    this.llamarAbrir();
  }

  llamarAbrir = () => {
    const circuito = sessionStorage.getItem('circuito');


     fetch(`http://localhost:3000/circuitos/${circuito}/abrir`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async res => {
    const body = await res.json();

      if (!res.ok) {
        throw new Error(body.message ||'Error al abrir el circuito');
      }
      return body;
    })
    .then(data => {
      alert('Circuito abierto correctamente');
      this.router.navigate(['/cerrar']);
    })
    .catch(err => {
      console.error(err);
      alert(err.message || 'No se pudo abrir el circuito');
    });
  }

}
