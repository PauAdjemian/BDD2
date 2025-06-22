import { Component } from '@angular/core';
import { PopUpPM } from "../pop-up-pm/pop-up-pm";
import { Datetime } from "../datetime/datetime";


@Component({
  selector: 'app-nro-circuito',
  imports: [PopUpPM, Datetime],
  templateUrl: './nro-circuito.html',
  styleUrl: './nro-circuito.css'
})
export class NroCircuito {
}
