import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-abrir',
  imports: [CommonModule],
  templateUrl: './confirmar-abrir.html',
  styleUrl: './confirmar-abrir.css'
})
export class ConfirmarAbrir {

  constructor(private router: Router) {}


  isVisible = false;

  close() {
    this.isVisible = false;
  }

  open() {
    this.isVisible = true;
  }

  irACerrar() {
    this.router.navigate(['/cerrar']);
  }

}
