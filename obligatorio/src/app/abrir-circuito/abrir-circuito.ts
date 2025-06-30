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

  circuito: string | null = null;

  estadoCircuito: string = 'Cargando...';

   ngOnInit() {
   this.circuito = sessionStorage.getItem('circuito');

    if (this.circuito) {
      fetch(`http://localhost:3000/circuitos/${this.circuito}/estado`)
        .then(res => res.json())
        .then(data => {
          this.estadoCircuito = data.estado ? 'Abierto' : 'Cerrado';
        })
        .catch(err => {
          console.error(err);
          this.estadoCircuito = 'Error al obtener estado';
        });
    } else {
      this.estadoCircuito = 'Circuito no definido';
    }
  }
}
