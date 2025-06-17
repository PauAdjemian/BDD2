import { RouterModule, Routes } from '@angular/router';
import { LogInVotante } from './log-in-votante/log-in-votante';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{"path": '', component: LogInVotante}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule {}