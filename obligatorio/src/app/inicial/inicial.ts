import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  imports: [],
  templateUrl: './inicial.html',
  styleUrl: './inicial.css'
})
export class Inicial {
  constructor(private router: Router) {}

  irAVotante() {
    this.router.navigate(['/votante']);
  }

  irAMesa() {
    this.router.navigate(['/mesa']);
  }

  irAAdmin() {
    this.router.navigate(['/admin']);
  }
}

