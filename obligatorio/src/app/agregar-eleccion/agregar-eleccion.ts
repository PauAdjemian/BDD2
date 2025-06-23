import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-eleccion',
  imports: [CommonModule],
  templateUrl: './agregar-eleccion.html',
  styleUrl: './agregar-eleccion.css'
})
export class AgregarEleccion {
    constructor(private router: Router) {}


  isVisible = false;

  close() {
    this.isVisible = false;
  }

  open() {
    this.isVisible = true;
  }

}
