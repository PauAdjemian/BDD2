import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-circuito',
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar-circuito.html',
  styleUrl: './agregar-circuito.css'
})
export class AgregarCircuito {
  isVisible = false;

  circuito = {
    Id_establecimiento: null,
    departamento: '',
    localidad: '',
    barrio_zona: ''
  };

  open() {
    this.circuito={
      Id_establecimiento: null,
      departamento: '',
      localidad: '',
      barrio_zona: ''
    }
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

    onSubmit() {
    const recibidos = {
      Id_establecimiento: this.circuito.Id_establecimiento,
      departamento: this.circuito.departamento,
      localidad: this.circuito.localidad,
      barrio_zona: this.circuito.barrio_zona
    };
    fetch('http://localhost:3000/admin/cargarCircuito', {
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

  

