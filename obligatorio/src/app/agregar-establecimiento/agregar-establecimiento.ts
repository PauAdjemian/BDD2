import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-establecimiento',
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar-establecimiento.html',
  styleUrl: './agregar-establecimiento.css'
})
export class AgregarEstablecimiento {
  isVisible: boolean = false;

  establecimiento = {
    nombre: '',
    direccion: ''
  };

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  onSubmit() {
    const recibido = {
      Nombre: this.establecimiento.nombre,
      Dirección: this.establecimiento.direccion
    };
  }
}
