import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cdd', pathMatch: 'full' },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then((m) => m.CddModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
