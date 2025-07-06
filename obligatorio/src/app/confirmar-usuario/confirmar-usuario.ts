import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Votado } from "../votado/votado";

@Component({
  selector: 'app-confirmar-usuario',
  imports: [ReactiveFormsModule, CommonModule, Votado, FormsModule],
  templateUrl: './confirmar-usuario.html',
  styleUrl: './confirmar-usuario.css'
})


export class ConfirmarUsuario {
constructor(private router: Router) {}

  votante={
    nombre : '',
    apellido : '',
    CI : null
  }

  isVisible = false;

  @ViewChild('Popup') popup!: Votado;

  abrirSiguiente() {
    this.isVisible = false;

    
    setTimeout(() => {
      this.popup.open();
    }, 0);
  }

  close() {
    this.isVisible = false;
  }

  open() {
    this.isVisible = true;
  }

  irAVotante() {
    this.router.navigate(['/votante']);
  }

  irAlistas(){
    this.router.navigate(['/listas']);
  }

  Confirmacion(ci: number){
    this.open();
    fetch(`http://localhost:3000/votantes/${ci}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se encontró votante con esa cédula');
      }
      return response.json();
    })
    .then(data => {
      console.log('Datos votante:', data);
      this.votante = data;  
    })
    .catch(error => {
      console.error(error);
      alert(error.message);
    });
  }


}

