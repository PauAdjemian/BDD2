import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit() {
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado) {
    const index = this.modos.indexOf(modoGuardado);
    if (index !== -1) this.modoActualIndex = index;
  }
}

cambiarModo() {
  this.modoActualIndex = (this.modoActualIndex + 1) % this.modos.length;
  const nuevoModo = this.modoActual;
  localStorage.setItem('modo', nuevoModo);

  switch (nuevoModo) {
    case 'Votante':
      this.router.navigate(['/votante']);
      break;
    case 'Integrante Mesa':
      this.router.navigate(['/mesa']);
      break;
    case 'Administrador':
      this.router.navigate(['/admin']);
      break;
  }
}
}