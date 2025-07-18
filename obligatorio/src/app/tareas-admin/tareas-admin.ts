import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgregarEleccion } from "../agregar-eleccion/agregar-eleccion";
import { AgregarEstablecimiento } from "../agregar-establecimiento/agregar-establecimiento";
import { AgregarCandidato } from "../agregar-candidato/agregar-candidato";
import { AgregarPapeleta } from "../agregar-papeleta/agregar-papeleta";
import { AgregarLista } from "../agregar-lista/agregar-lista";
import { AgregarIM } from "../agregar-im/agregar-im";
import { AgregarPolicia } from "../agregar-policia/agregar-policia";
import { AgregarPartidoPolitico } from "../agregar-partido-politico/agregar-partido-politico";
import { AgregarParticipacion } from "../agregar-participacion/agregar-participacion";
import { AgregarVotante } from "../agregar-votante/agregar-votante";
import { AgregarCircuito } from '../agregar-circuito/agregar-circuito';
import { AgregarVotanteEleccion } from "../agregar-votante-eleccion/agregar-votante-eleccion";

@Component({
  selector: 'app-tareas-admin',
  imports: [CommonModule, FormsModule, AgregarEleccion, AgregarEstablecimiento, AgregarCandidato, AgregarPapeleta, AgregarLista, AgregarIM, AgregarPolicia, AgregarPartidoPolitico, AgregarParticipacion, AgregarVotante, AgregarCircuito, AgregarVotanteEleccion],
  templateUrl: './tareas-admin.html',
  styleUrl: './tareas-admin.css'
})
export class TareasAdmin {

  @ViewChild('PopupVotante') PopupVotante!: AgregarVotante;
  @ViewChild('PopupEleccion') popupEleccion!: AgregarEleccion;
  @ViewChild('PopupEstablecimiento') popupEstablecimiento!: AgregarEstablecimiento;
  @ViewChild('PopupCandidato') popupCandidato!: AgregarCandidato;
  @ViewChild('PopupPapeleta') popupPapeleta!: AgregarPapeleta;
  @ViewChild('PopupLista') popupLista!: AgregarLista;
  @ViewChild('PopupIM') popupIM!: AgregarIM;
  @ViewChild('PopupPolicia') popupPolicia!: AgregarPolicia;
  @ViewChild('PopupPartido') PopupPartido!: AgregarPartidoPolitico;
  @ViewChild('PopupParticipacion') PopupParticipacion!: AgregarParticipacion;
  @ViewChild('PopupCircuito') PopupCircuito!: AgregarCircuito;
  @ViewChild('PopupVotEleccion') PopupVotEleccion!: AgregarVotanteEleccion;
  
  
  opcionSeleccionada: string = '';



  abrirPopup() {
    switch (this.opcionSeleccionada) {
      case 'votante':
        this.PopupVotante.open();
        break;
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
      case 'lista':
        this.popupLista.open();
        break;
      case 'integrante':
        this.popupIM.open();
        break;
      case 'policia':
        this.popupPolicia.open();
        break;
      case 'partido':
        this.PopupPartido.open();
        break;
      case 'participacion':
        this.PopupParticipacion.open();
        break;
      case 'circuito':
        this.PopupCircuito.open();
        break;
      case 'votanteElección':
        this.PopupVotEleccion.open();
        break;
    }
    }
  }
