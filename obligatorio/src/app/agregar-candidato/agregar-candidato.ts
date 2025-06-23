import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-candidato',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-candidato.html',
  styleUrl: './agregar-candidato.css'
})
export class AgregarCandidato {
  isVisible = false;

  candidato = {
    CI: null as number | null,
    partido: '',
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
    const recibido = {
      CI: this.candidato.CI,
      partido: this.candidato.partido,
      tipo_eleccion: this.candidato.tipo_eleccion,
      fecha_eleccion: this.candidato.fecha_eleccion
    };

  }}