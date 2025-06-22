import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Datetime } from "../datetime/datetime";
import { Router } from '@angular/router';

@Component({
  selector: 'app-abrir-circuito',
  imports: [Sidebar, Datetime],
  templateUrl: './abrir-circuito.html',
  styleUrl: './abrir-circuito.css'
})
export class AbrirCircuito {
  constructor(private router: Router) {}
  CerrarCircuito(){
    this.router.navigate(['/cerrar']);
  }
}
