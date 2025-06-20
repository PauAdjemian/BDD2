import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votado',
  imports: [CommonModule],
  templateUrl: './votado.html',
  styleUrl: './votado.css'
})
export class Votado {

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
