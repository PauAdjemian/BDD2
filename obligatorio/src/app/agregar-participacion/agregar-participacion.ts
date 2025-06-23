import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-participacion',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-participacion.html',
  styleUrl: './agregar-participacion.css'
})
export class AgregarParticipacion {
  nuevaParticipacion = {
  fecha_eleccion: '',
  tipo_eleccion: '',
  partido: ''
};

hoy = new Date().toISOString().split('T')[0];
isVisible = false;

onSubmit() {
  console.log('Datos a enviar:', this.nuevaParticipacion);
  if (this.nuevaParticipacion.fecha_eleccion < this.hoy) {
    alert("La fecha debe ser hoy o posterior.");
    return;
  }
  const recibido = {
    fecha_elección:this.nuevaParticipacion.fecha_eleccion,
    tipo_elección:this.nuevaParticipacion.tipo_eleccion,
    partido:this.nuevaParticipacion.partido,
  }
}

close() {
  this.isVisible = false;
}
open(){
  this.nuevaParticipacion={
    fecha_eleccion: '',
    tipo_eleccion: '',
    partido: ''
  }
  this.isVisible=true;
}

}
