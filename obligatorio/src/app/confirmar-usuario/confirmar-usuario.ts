import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-usuario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './confirmar-usuario.html',
  styleUrl: './confirmar-usuario.css'
})
export class ConfirmarUsuario {
constructor(private router: Router) {}

  isVisible = false;

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  irAVotante() {
    this.router.navigate(['/votante']);
  }

}
