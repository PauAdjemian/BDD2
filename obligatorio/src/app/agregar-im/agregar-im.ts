import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-im',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-im.html',
  styleUrl: './agregar-im.css'
})
export class AgregarIM {

  isVisible = false;

  hoy: string = new Date().toISOString().split('T')[0];

  integrante = {
    CI: '',
    fecha: '',
    rol: '',
    organismo_publico: '',
    ID_circuito: null as number | null,
    ID_establecimiento: null as number | null,
    contrasenia: ''
  };

  open() {
    this.integrante = {
      CI: '',
      fecha: '',
      rol: '',
      organismo_publico: '',
      ID_circuito: null,
      ID_establecimiento: null,
      contrasenia: ''
    };
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  onSubmit() {
    if (this.integrante.fecha < this.hoy) {
      alert('La fecha debe ser hoy o posterior.');
      return;
    }

    const recibidos = {
      CI: this.integrante.CI,
      fecha: this.integrante.fecha,
      rol: this.integrante.rol,
      organismo_público: this.integrante.organismo_publico,
      ID_circuito: this.integrante.ID_circuito,
      ID_establecimiento: this.integrante.ID_establecimiento,
      contraseña: this.integrante.contrasenia
    };
    fetch('http://localhost:3000/admin/cargarIntegrante', {
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

