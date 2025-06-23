import { Component } from '@angular/core';
import { Datetime } from "../datetime/datetime";
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-admin',
  imports: [Datetime],
  templateUrl: './log-in-admin.html',
  styleUrl: './log-in-admin.css'
})
export class LogInAdmin {

  constructor(private router: Router) {}

  irAFunciones(){
    this.router.navigate(['/tareas']);
  }
}
