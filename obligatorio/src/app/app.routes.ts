import { RouterModule, Routes } from '@angular/router';
import { LogInIntegranteMesa } from './log-in-integrante-mesa/log-in-integrante-mesa'; 

import { NgModule } from '@angular/core';

export const routes: Routes = [
{"path": '', component: LogInIntegranteMesa}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}