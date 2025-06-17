import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-boton-modo',
  imports: [],
  templateUrl: './boton-modo.html',
  styleUrl: './boton-modo.css'
})
export class BotonModo {
  constructor(private router: Router) {}

  modos = ['Votante', 'Integrante Mesa', 'Administrador'];
  modoActualIndex = 0;

  get modoActual() {
    return this.modos[this.modoActualIndex];
  }

  cambiarModo() {
    this.modoActualIndex = (this.modoActualIndex + 1) % this.modos.length;
  }
}
