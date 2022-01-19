import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },

  {
    path: 'feed', component: FeedComponent
  },

  {path: 'cdd',
  loadChildren: () => import('./cdd/cdd.module').then((c) => c.CddModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
