import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-participacion',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-participacion.html',
  styleUrl: './agregar-participacion.css'
})
export class AgregarParticipacion {
  nuevaParticipacion = {
  fecha_eleccion: '',
  tipo_eleccion: '',
  partido: ''
};

hoy = new Date().toISOString().split('T')[0];
isVisible = false;

onSubmit() {
    const parametros = {
    fecha_elección:this.nuevaParticipacion.fecha_eleccion,
    tipo_elección:this.nuevaParticipacion.tipo_eleccion,
    partido:this.nuevaParticipacion.partido,
  }
    console.log('Parámetros enviados:', parametros);
    fetch('http://localhost:3000/admin/cargarParticipacion', {
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
      alert('Error al cargar participación');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al comunicarse con el servidor');
  });
};


close() {
  this.isVisible = false;
}
open(){
  this.nuevaParticipacion={
    fecha_eleccion: '',
    tipo_eleccion: '',
    partido: ''
  }
  this.isVisible=true;
}

}
