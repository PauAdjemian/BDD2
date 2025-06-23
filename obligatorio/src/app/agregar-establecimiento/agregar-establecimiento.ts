import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-establecimiento',
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar-establecimiento.html',
  styleUrl: './agregar-establecimiento.css'
})
export class AgregarEstablecimiento {
  isVisible: boolean = false;

  

  establecimiento = {
    nombre: '',
    direccion: ''
  };

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

    onSubmit() {
    const parametros = {
      Nombre: this.establecimiento.nombre,
      Dirección: this.establecimiento.direccion
    }
    console.log('Parámetros enviados:', parametros);
    fetch('http://localhost:3000/admin/cargarEstablecimiento', {
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
      alert('Error al cargar el establecimeinto');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al comunicarse con el servidor');
  });
}
}
