import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgregarEleccion } from "../agregar-eleccion/agregar-eleccion";
import { AgregarEstablecimiento } from "../agregar-establecimiento/agregar-establecimiento";

@Component({
  selector: 'app-tareas-admin',
  imports: [CommonModule, FormsModule, AgregarEleccion, AgregarEstablecimiento],
  templateUrl: './tareas-admin.html',
  styleUrl: './tareas-admin.css'
})
export class TareasAdmin {

  @ViewChild('PopupEleccion') popupEleccion!: AgregarEleccion;
  @ViewChild('PopupEstablecimiento') popupEstablecimiento!: AgregarEstablecimiento;
  
  opcionSeleccionada: string = '';



  abrirPopup() {
    switch (this.opcionSeleccionada) {
      case 'eleccion':
        this.popupEleccion.open();
        break;
      case 'establecimiento':
        this.popupEstablecimiento.open();
        break;
    }
  }

}
