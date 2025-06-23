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
  comisaria: null as number | null,
  fecha: '',
  ID_establecimiento: null
};
hoy = new Date().toISOString().split('T')[0];
isVisible = false;

onSubmit() {
  console.log('Datos a enviar:', this.nuevoPolicia);
  if (this.nuevoPolicia.fecha < this.hoy) {
    alert("La fecha debe ser hoy o posterior.");
    return;
  }
  const recibido={
    CI: this.nuevoPolicia.CI,
    comisaria: this.nuevoPolicia.comisaria,
    fecha: this.nuevoPolicia.fecha,
    ID_establecimiento: this.nuevoPolicia.ID_establecimiento,
  }
  
}

  open() {
    this.nuevoPolicia=
    {
      CI: null,
      comisaria: null as number | null,
      fecha: '',
      ID_establecimiento: null,
    }
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
