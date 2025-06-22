import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Datetime } from "../datetime/datetime";

@Component({
  selector: 'app-cerrar-circuito',
  imports: [Sidebar, Datetime],
  templateUrl: './cerrar-circuito.html',
  styleUrl: './cerrar-circuito.css'
})
export class CerrarCircuito {

}
