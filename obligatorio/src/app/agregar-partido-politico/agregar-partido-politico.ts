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
  const recibido={
    nombre:this.nuevoPartido.nombre,
    direccion_sede:this.nuevoPartido.direccion_sede,
    presidente:this.nuevoPartido.presidente,
    vicepresidente:this.nuevoPartido.vicepresidente,
  }
}
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
