import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-votante-eleccion',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-votante-eleccion.html',
  styleUrl: './agregar-votante-eleccion.css'
})
export class AgregarVotanteEleccion {

isVisible = false;

  votEleccion = {
    CI: null,
    tipo_eleccion: '',
    fecha_eleccion: '',
    circuito_asignado : null,
    circuito_votado : null
  };

  open() {
    this.votEleccion={
      CI: null,
    tipo_eleccion: '',
    fecha_eleccion: '',
    circuito_asignado : null,
    circuito_votado : null
    }
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

    onSubmit() {
       console.log('Datos a enviar:', this.votEleccion);
    const recibidos = {
      CI_votante: this.votEleccion.CI,
      tipo_elección:this.votEleccion.tipo_eleccion,
      fecha_elección:this.votEleccion.fecha_eleccion,
      circuito_asignado: this.votEleccion.circuito_asignado,
      circuito_votado : null
    };

    console.log(recibidos)

    fetch('http://localhost:3000/admin/cargarVotanteEleccion', {
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