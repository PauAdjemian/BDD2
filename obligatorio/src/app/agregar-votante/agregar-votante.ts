import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-votante',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-votante.html',
  styleUrl: './agregar-votante.css'
})
export class AgregarVotante {
   isVisible = false;
    hoy = new Date().toISOString().split('T')[0];

  persona = {
    ci: null,
    numero_credencial:null,
    serie_credencial: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: ''
  };
  open(){
    this.persona={
      ci: null,
      numero_credencial: null,
      serie_credencial: '',
      nombre: '',
      apellido: '',
      fecha_nacimiento: ''
    }
    this.isVisible=true;
  }
  close() {
    this.isVisible = false;
  }


  onSubmit() {
    if (this.persona.fecha_nacimiento > this.hoy) {
    alert("La fecha debe ser anterior a hoy.");
    return;
    }
    const recibidos={
      CI:this.persona.ci,
      número_cc:this.persona.numero_credencial,
      serie_cc:this.persona.serie_credencial,
      nombre:this.persona.nombre,
      apellido:this.persona.apellido,
      fecha_nacimiento:this.persona.fecha_nacimiento,
  }
  fetch('http://localhost:3000/admin/cargarVotante', {
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

  
