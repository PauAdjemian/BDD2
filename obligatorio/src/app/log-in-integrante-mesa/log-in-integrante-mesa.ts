import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Datetime } from "../datetime/datetime";


@Component({
  selector: 'app-log-in-integrante-mesa',
  imports: [Datetime],
  templateUrl: './log-in-integrante-mesa.html',
  styleUrl: './log-in-integrante-mesa.css'
})
export class LogInIntegranteMesa {

  constructor(private router: Router) {}

  irAFunciones(){
    this.router.navigate(['/abrir']);
  }
  

}
