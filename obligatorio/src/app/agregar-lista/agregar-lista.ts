import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-lista.html',
  styleUrl: './agregar-lista.css'
})
export class AgregarLista {
  isVisible = false;

  lista = {
    ID_papeleta: null,
    numero: null,
    imagen: ''
  };

  open() {
    this.lista = 
    {
      ID_papeleta: null,
      numero: null,
      imagen: ''
    };
    this.isVisible = true;

  }

  close() {
    this.isVisible = false;
  }

  onSubmit() {
    const recibidos = {
      ID_papeleta: this.lista.ID_papeleta,
      número: this.lista.numero,
      imagen: this.lista.imagen
    };

  
    fetch('http://localhost:3000/admin/cargarLista', {
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
