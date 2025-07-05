import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-votante',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-votante.html',
  styleUrl: './agregar-votante.css'
})
export class AgregarVotante {
   isVisible = false;
    hoy = new Date().toISOString().split('T')[0];

  persona = {
    ci: null,
    numero_credencial:null,
    serie_credencial: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: ''
  };
  open(){
    this.persona={
      ci: null,
      numero_credencial: null,
      serie_credencial: '',
      nombre: '',
      apellido: '',
      fecha_nacimiento: ''
    }
    this.isVisible=true;
  }


  onSubmit() {
    if (this.persona.fecha_nacimiento > this.hoy) {
    alert("La fecha debe ser hoy o posterior.");
    return;
    }
    const recibidos={
      ci:this.persona.ci,
      numero_cc:this.persona.numero_credencial,
      serie_cc:this.persona.serie_credencial,
      nombre:this.persona.nombre,
      apellido:this.persona.apellido,
      fecha_nacimiento:this.persona.fecha_nacimiento,
    
  }
}

  close() {
    this.isVisible = false;
  }
}