import { Component, ViewChild } from '@angular/core';
import { PopUpPM } from "../pop-up-pm/pop-up-pm";
import { Datetime } from "../datetime/datetime";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nro-circuito',
  imports: [PopUpPM, Datetime, FormsModule, CommonModule],
  templateUrl: './nro-circuito.html',
  styleUrl: './nro-circuito.css'
})
export class NroCircuito {
  nroCircuito: number | null = null;

  @ViewChild('Popup') popup!: PopUpPM;

  async validarCircuito() {
    console.log('Validando circuito:', this.nroCircuito);
    const parametros = {
      id: Number(this.nroCircuito)
    }
    
    try {
      const response = await fetch('http://localhost:3000/circuitos/existe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametros)
      });
      const data = await response.json();
      console.log('Datos recibidos:', data);
      if (response.ok) {
        console.log('Circuito obtenido:', data);
        if (data.exito){
          sessionStorage.setItem('nroCircuito', String(this.nroCircuito));
          console.log('Circuito guardado en sessionStorage:', sessionStorage.getItem('nroCircuito'));
          this.popup.open();
        }
      } else {
        alert('Error al obtener el circuito');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al comunicarse con el servidor');
    }
  }
}
