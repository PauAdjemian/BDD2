import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-papeleta',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-papeleta.html',
  styleUrl: './agregar-papeleta.css'
})
export class AgregarPapeleta {
  isVisible = false;
  hoy = new Date().toISOString().split('T')[0];

  papeleta = {
    tipo: '',
    tipo_eleccion: '',
    fecha_eleccion: ''
  };

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  onSubmit() {
  if (this.papeleta.fecha_eleccion < this.hoy) {
    alert("La fecha debe ser hoy o posterior.");
    return;
  }
    const recibidos = {
      tipo: this.papeleta.tipo,
      tipo_elección: this.papeleta.tipo_eleccion,
      fecha_elección: this.papeleta.fecha_eleccion
    };

    fetch('http://localhost:3000/admin/cargarPapeleta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recibidos)
    
  })
  .then(res => res.json())
  .then(data => {
    if (data.exito) {
      alert(data.message); 
      this.close();        
    } else {
      alert(data.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al comunicarse con el servidor');
  });
};


}
