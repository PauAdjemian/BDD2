import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Votado } from "../votado/votado";

@Component({
  selector: 'app-confirmar-usuario',
  imports: [ReactiveFormsModule, CommonModule, Votado],
  templateUrl: './confirmar-usuario.html',
  styleUrl: './confirmar-usuario.css'
})


export class ConfirmarUsuario {
constructor(private router: Router) {}


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

}

