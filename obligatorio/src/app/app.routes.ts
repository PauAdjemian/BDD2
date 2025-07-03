import { RouterModule, Routes } from '@angular/router';
import { LogInIntegranteMesa } from './log-in-integrante-mesa/log-in-integrante-mesa'; 
import { LogInAdmin } from './log-in-admin/log-in-admin';
import { LogInVotante } from './log-in-votante/log-in-votante';
import { Inicial } from './inicial/inicial';
import { NroCircuito } from './nro-circuito/nro-circuito';
import { PagListas } from './pag-listas/pag-listas';
import { NgModule } from '@angular/core';
import { AbrirCircuito } from './abrir-circuito/abrir-circuito';
import { CerrarCircuito } from './cerrar-circuito/cerrar-circuito';
import { TareasAdmin } from './tareas-admin/tareas-admin';
import { Resultados } from './resultados/resultados';

export const routes: Routes = [
{"path": 'mesa', component: LogInIntegranteMesa},
{"path": 'admin', component: LogInAdmin},
{"path": 'resultados', component: Resultados},
{"path": 'votante', component: LogInVotante},
{"path": '', component: Inicial},
{"path": 'circuito', component: NroCircuito},
{"path": 'listas', component: PagListas},
{"path": 'abrir', component: AbrirCircuito},
{"path": 'cerrar', component: CerrarCircuito},
{"path": 'tareas', component: TareasAdmin},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}