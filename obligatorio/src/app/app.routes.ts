import { RouterModule, Routes } from '@angular/router';
import { LogInIntegranteMesa } from './log-in-integrante-mesa/log-in-integrante-mesa'; 
import { LogInAdmin } from './log-in-admin/log-in-admin';

import { NgModule } from '@angular/core';

export const routes: Routes = [
{"path": '', component: LogInIntegranteMesa},
{"path": 'admin', component: LogInAdmin},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}