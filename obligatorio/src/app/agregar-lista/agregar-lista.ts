import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-lista.html',
  styleUrl: './agregar-lista.css'
})
export class AgregarLista {
  isVisible = false;

  lista = {
    ID_papeleta: null as number | null,
    numero: null as number | null,
    imagen: ''
  };

  open() {
    this.lista = 
    {
      ID_papeleta: null,
      numero: null,
      imagen: ''
    };
    this.isVisible = true;

  }

  close() {
    this.isVisible = false;
  }

  onSubmit() {
    const recibido = {
      ID_papeleta: this.lista.ID_papeleta,
      número: this.lista.numero, //espacio?
      imagen: this.lista.imagen
    };
  }
}
