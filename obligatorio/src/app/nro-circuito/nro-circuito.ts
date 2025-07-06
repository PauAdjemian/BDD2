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
    // ✅ Verificar existencia
    const responseExiste = await fetch('http://localhost:3000/circuitos/existe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parametros)
    });

    const dataExiste = await responseExiste.json();
    console.log('Datos recibidos (existe):', dataExiste);

    if (responseExiste.ok && dataExiste.exito) {
      // ✅ Si existe, verificar estado
      const responseEstado = await fetch(`http://localhost:3000/circuitos/${this.nroCircuito}/estado`);
      const dataEstado = await responseEstado.json();
      console.log('Datos recibidos (estado):', dataEstado);

      if (responseEstado.ok) {
        if (dataEstado.estado) {
          sessionStorage.setItem('nroCircuito', String(this.nroCircuito));
          console.log('Circuito guardado en sessionStorage:', sessionStorage.getItem('nroCircuito'));
          this.popup.open();
        } else {
          alert('El circuito no está abierto.');
        }
      } else {
        alert('Error al obtener el estado del circuito');
      }
    } else {
      alert('El circuito no existe.');
    }

  } catch (error) {
    console.error('Error:', error);
    alert('Error al comunicarse con el servidor');
  }
}
}