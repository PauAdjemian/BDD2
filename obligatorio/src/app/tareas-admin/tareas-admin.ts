import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgregarEleccion } from "../agregar-eleccion/agregar-eleccion";
import { AgregarEstablecimiento } from "../agregar-establecimiento/agregar-establecimiento";
import { AgregarCandidato } from "../agregar-candidato/agregar-candidato";
import { AgregarPapeleta } from "../agregar-papeleta/agregar-papeleta";

@Component({
  selector: 'app-tareas-admin',
  imports: [CommonModule, FormsModule, AgregarEleccion, AgregarEstablecimiento, AgregarCandidato, AgregarPapeleta],
  templateUrl: './tareas-admin.html',
  styleUrl: './tareas-admin.css'
})
export class TareasAdmin {

  @ViewChild('PopupEleccion') popupEleccion!: AgregarEleccion;
  @ViewChild('PopupEstablecimiento') popupEstablecimiento!: AgregarEstablecimiento;
  @ViewChild('PopupCandidato') popupCandidato!: AgregarCandidato;
  @ViewChild('PopupPapeleta') popupPapeleta!: AgregarPapeleta;
  
  opcionSeleccionada: string = '';



  abrirPopup() {
    switch (this.opcionSeleccionada) {
      case 'eleccion':
        this.popupEleccion.open();
        break;
      case 'establecimiento':
        this.popupEstablecimiento.open();
        break;
      case 'candidato':
        this.popupCandidato.open();
        break;  
      case 'papeleta':
        this.popupPapeleta.open();
        break;
    }
  }

}
