import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-papeleta',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-papeleta.html',
  styleUrl: './agregar-papeleta.css'
})
export class AgregarPapeleta {
  isVisible = false;
  hoy = new Date().toISOString().split('T')[0];

  papeleta = {
    tipo: '',
    tipo_eleccion: '',
    fecha_eleccion: ''
  };

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  onSubmit() {
  if (this.papeleta.fecha_eleccion < this.hoy) {
    alert("La fecha debe ser hoy o posterior.");
    return;
  }
    const recibido = {
      tipo: this.papeleta.tipo,
      "tipo_elección": this.papeleta.tipo_eleccion,
      "fecha_elección": this.papeleta.fecha_eleccion
    };
}
}