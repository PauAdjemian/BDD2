import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nro-circuito',
  imports: [],
  templateUrl: './nro-circuito.html',
  styleUrl: './nro-circuito.css'
})
export class NroCircuito {
  constructor(private router: Router) {}

  irAVotante() {
    this.router.navigate(['/votante']);
  }
}
