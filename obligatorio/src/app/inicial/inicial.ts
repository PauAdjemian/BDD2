import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Datetime } from "../datetime/datetime";

@Component({
  selector: 'app-inicial',
  imports: [Datetime],
  templateUrl: './inicial.html',
  styleUrl: './inicial.css'
})
export class Inicial {
  constructor(private router: Router) {}

  irAVotante() {
    this.router.navigate(['/circuito']);
  }

  irAMesa() {
    this.router.navigate(['/mesa']);
  }

  irAAdmin() {
    this.router.navigate(['/admin']);
  }
}

