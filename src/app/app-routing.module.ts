import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'bemvindo'},
  {
    path:'bemvindo',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then((m) => m.BemVindoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
