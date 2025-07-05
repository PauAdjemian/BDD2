import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-candidato',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-candidato.html',
  styleUrl: './agregar-candidato.css'
})
export class AgregarCandidato {
  isVisible = false;

  candidato = {
    CI: null,
    partido: '',
    tipo_eleccion: '',
    fecha_eleccion: ''
  };

  open() {
    this.candidato={
      CI: null,
      partido: '',
    tipo_eleccion: '',
    fecha_eleccion: '',
    }
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

    onSubmit() {
    const recibidos = {
      CI: this.candidato.CI,
    };


    fetch('http://localhost:3000/admin/cargarCandidato', {
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