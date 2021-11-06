import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'coercion' },
  {
    path: 'coercion',
    loadChildren: () => import('./basics/coercion/coercion.module').then((m) => m.CoercionModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'coercion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
