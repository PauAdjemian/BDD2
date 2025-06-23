import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgregarEleccion } from "../agregar-eleccion/agregar-eleccion";

@Component({
  selector: 'app-tareas-admin',
  imports: [CommonModule, FormsModule, AgregarEleccion],
  templateUrl: './tareas-admin.html',
  styleUrl: './tareas-admin.css'
})
export class TareasAdmin {
opcionSeleccionada: string = '';
  mostrar: boolean = false;

  mostrarComponente() {
    if (this.opcionSeleccionada === 'eleccion') {
      this.mostrar = true;
    }
  }

  onCerrarPopup(valor: boolean) {
    this.mostrar = valor;
  }



}
