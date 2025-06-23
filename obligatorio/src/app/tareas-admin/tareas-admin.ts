import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgregarEleccion } from "../agregar-eleccion/agregar-eleccion";

@Component({
  selector: 'app-tareas-admin',
  imports: [CommonModule, FormsModule, AgregarEleccion],
  templateUrl: './tareas-admin.html',
  styleUrl: './tareas-admin.css'
})
export class TareasAdmin {

  @ViewChild('PopupEleccion') popupEleccion!: AgregarEleccion;
  
  opcionSeleccionada: string = '';



  abrirPopup() {
    switch (this.opcionSeleccionada) {
      case 'eleccion':
        this.popupEleccion.open();
        break;
    }
  }

}
