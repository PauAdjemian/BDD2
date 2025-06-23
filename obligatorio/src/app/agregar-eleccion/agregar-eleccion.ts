import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-eleccion',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-eleccion.html',
  styleUrl: './agregar-eleccion.css'
})
export class AgregarEleccion {
    constructor(private router: Router) {}

  onSubmit() {
    const fechaInput = (document.getElementById('fecha') as HTMLInputElement).value;
    const tipoEleccionInput = (document.getElementById('tipoEleccion') as HTMLSelectElement).value;
    const parametros = {
      fecha: fechaInput,
      tipoEleccion: tipoEleccionInput
    }
    console.log('Parámetros enviados:', parametros);
    fetch('http://localhost:3000/admin/cargarEleccion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parametros)
  })
  .then(res => res.json())
  .then(data => {
    if (data.exito) {
      alert(data.message); 
      this.close();        
    } else {
      alert('Error al cargar elección');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al comunicarse con el servidor');
  });
}


  isVisible = false;

  close() {
    this.isVisible = false;
  }

  open() {
    this.isVisible = true;
  }

}
