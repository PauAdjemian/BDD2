import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-partido-politico',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-partido-politico.html',
  styleUrl: './agregar-partido-politico.css'
})
export class AgregarPartidoPolitico {
  nuevoPartido = {
  nombre: '',
  direccion_sede: '',
  presidente: '',
  vicepresidente: ''
};

isVisible = false;

onSubmit() {
    const parametros={
    nombre:this.nuevoPartido.nombre,
    dirección_sede:this.nuevoPartido.direccion_sede,
    presidente:this.nuevoPartido.presidente,
    vicepresidente:this.nuevoPartido.vicepresidente,
  }
  console.log('Formulario enviado:', this.nuevoPartido);
    console.log('Parámetros enviados:', parametros);
    fetch('http://localhost:3000/admin/cargarPartidoPolitico', {
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
      alert('Error al cargar partido político');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al comunicarse con el servidor');
  });
};

open(){
  this.nuevoPartido={
    nombre: '',
    direccion_sede: '',
    presidente: '',
    vicepresidente: ''
  }
  this.isVisible=true;
}

close() {
  this.isVisible = false;
}

}
