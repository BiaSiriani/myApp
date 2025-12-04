import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerigosPage } from './perigos.page';

const routes: Routes = [
  {
    path: '',
    component: PerigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerigosPageRoutingModule {}