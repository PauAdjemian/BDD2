import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-pm',
  imports: [CommonModule],
  templateUrl: './pop-up-pm.html',
  styleUrl: './pop-up-pm.css'
})
export class PopUpPM {
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
