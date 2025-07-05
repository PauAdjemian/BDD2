import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-policia',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-policia.html',
  styleUrl: './agregar-policia.css'
})
export class AgregarPolicia {
  nuevoPolicia = {
  CI: null,
  comisaria: null,
  fecha: '',
  ID_establecimiento: null
};
hoy = new Date().toISOString().split('T')[0];
isVisible = false;

  open() {
    this.nuevoPolicia=
    {
      CI: null,
      comisaria: null,
      fecha: '',
      ID_establecimiento: null,
    }
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

onSubmit() {
  console.log('Datos a enviar:', this.nuevoPolicia);
  if (this.nuevoPolicia.fecha < this.hoy) {
    alert("La fecha debe ser hoy o posterior.");
    return;
  }
  const recibidos={
    CI: this.nuevoPolicia.CI,
    comisaría: this.nuevoPolicia.comisaria,
    fecha: this.nuevoPolicia.fecha,
    ID_establecimiento: this.nuevoPolicia.ID_establecimiento,
  }

fetch('http://localhost:3000/admin/cargarPolicia', {
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

