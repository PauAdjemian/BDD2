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
    this.router.navigate(['/abrir']);
  }


}
