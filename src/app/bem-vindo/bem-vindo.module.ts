import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BemVindoComponent } from './bem-vindo.component';
import { BemVindoRoutingModule } from './bem-vindo-routing.module';

@NgModule({
  declarations: [
    BemVindoComponent
  ],
  imports: [
    CommonModule,
    BemVindoRoutingModule
  ],
  exports: [
    BemVindoComponent
  ]
})
export class BemVindoModule { }
