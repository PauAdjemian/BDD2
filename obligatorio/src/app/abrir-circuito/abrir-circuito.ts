import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Datetime } from "../datetime/datetime";

@Component({
  selector: 'app-abrir-circuito',
  imports: [Sidebar, Datetime],
  templateUrl: './abrir-circuito.html',
  styleUrl: './abrir-circuito.css'
})
export class AbrirCircuito {

}
