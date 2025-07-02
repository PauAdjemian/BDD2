import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-cerrar',
  imports: [CommonModule],
  templateUrl: './confirmar-cerrar.html',
  styleUrl: './confirmar-cerrar.css'
})
export class ConfirmarCerrar {

  constructor(private router: Router) {}


  isVisible = false;

  close() {
    this.isVisible = false;
  }

  open() {
    this.isVisible = true;
  }

  irACerrar() {
    this.llamarcERRAR();
    this.router.navigate(['/abrir']);
  }

  llamarcERRAR = () => {
    const circuito = sessionStorage.getItem('circuito');
    fetch(`http://localhost:3000/circuitos/${circuito}/cerrar`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error al cerrar el circuito');
      }
      return res.json();
    })
    .then(data => {
      console.log('Circuito cerrado:', data);
      alert('Circuito cerrado correctamente');
      this.router.navigate(['/abrir']);
    })
    .catch(err => {
      console.error(err);
      alert('No se pudo cerrar el circuito');
    });
  }


}
