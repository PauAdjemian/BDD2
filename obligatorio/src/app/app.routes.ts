import { RouterModule, Routes } from '@angular/router';
import { LogInIntegranteMesa } from './log-in-integrante-mesa/log-in-integrante-mesa'; 
import { LogInAdmin } from './log-in-admin/log-in-admin';
import { LogInVotante } from './log-in-votante/log-in-votante';
import { Inicial } from './inicial/inicial';
import { NroCircuito } from './nro-circuito/nro-circuito';

import { NgModule } from '@angular/core';

export const routes: Routes = [
{"path": 'mesa', component: LogInIntegranteMesa},
{"path": 'admin', component: LogInAdmin},
{"path": 'votante', component: LogInVotante},
{"path": '', component: Inicial},
{"path": 'circuito', component: NroCircuito},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}