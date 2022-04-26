import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'bemvindo'},
  {
    path:'bemvindo',
    loadChildren: () => import('./bem-vindo/bem-vindo.module').then((m) => m.BemVindoModule),
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path:'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then((m) => m.CadastroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
