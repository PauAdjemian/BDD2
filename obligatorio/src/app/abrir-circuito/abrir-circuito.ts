import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Datetime } from "../datetime/datetime";
import { ConfirmarAbrir } from "../confirmar-abrir/confirmar-abrir";

@Component({
  selector: 'app-abrir-circuito',
  imports: [Sidebar, Datetime, ConfirmarAbrir],
  templateUrl: './abrir-circuito.html',
  styleUrl: './abrir-circuito.css'
})
export class AbrirCircuito {
  
}
