import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-voto',
  imports: [CommonModule],
  templateUrl: './confirmar-voto.html',
  styleUrl: './confirmar-voto.css'
})
export class ConfirmarVoto {
  constructor(private router: Router) {}


  isVisible = false;

  close() {
    this.isVisible = false;
  }

  open() {
    this.isVisible = true;
  }

  irAVotante() {
    this.router.navigate(['/votante']);
  }
}
