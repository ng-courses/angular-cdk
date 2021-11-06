import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoercionPage } from './coercion.page';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoercionPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CoercionPage }])
  ]
})
export class CoercionModule { }
