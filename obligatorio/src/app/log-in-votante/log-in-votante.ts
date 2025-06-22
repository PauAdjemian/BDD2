import { Component } from '@angular/core';
import { ConfirmarUsuario } from "../confirmar-usuario/confirmar-usuario";
import { Datetime } from "../datetime/datetime";


@Component({
  selector: 'app-log-in-votante',
  imports: [ConfirmarUsuario, Datetime],
  templateUrl: './log-in-votante.html',
  styleUrl: './log-in-votante.css'
})
export class LogInVotante {


}
