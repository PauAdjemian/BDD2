import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Datetime } from "../datetime/datetime";
import { ConfirmarAbrir } from "../confirmar-abrir/confirmar-abrir";
import { Resultados } from '../resultados/resultados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abrir-circuito',
  imports: [Sidebar, Datetime, ConfirmarAbrir],
  templateUrl: './abrir-circuito.html',
  styleUrl: './abrir-circuito.css'
})
export class AbrirCircuito {

  constructor(private router: Router) {}

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

public async irAResultados() {
  const response = await fetch(`http://localhost:3000/circuitos/${this.circuito}/habilitaResultados`);

  const data = await response.json(); 

  if (!response.ok) {
    alert(data.message || 'Error al habilitar resultados');
    return;
  }

  if (!data.habilitado) {
    alert(data.message || 'Error al habilitar resultados');
    return;
  }

  this.router.navigate(['/resultados']);
}

}
