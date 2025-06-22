import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Datetime } from "../datetime/datetime";
import { ConfirmarCerrar } from "../confirmar-cerrar/confirmar-cerrar";

@Component({
  selector: 'app-cerrar-circuito',
  imports: [Sidebar, Datetime, ConfirmarCerrar],
  templateUrl: './cerrar-circuito.html',
  styleUrl: './cerrar-circuito.css'
})
export class CerrarCircuito {

}
