import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-integrante-mesa',
  imports: [],
  templateUrl: './log-in-integrante-mesa.html',
  styleUrl: './log-in-integrante-mesa.css'
})
export class LogInIntegranteMesa {

  constructor(private router: Router) {}

  irAFunciones(){
    this.router.navigate(['/abrir']);
  }
  

}
