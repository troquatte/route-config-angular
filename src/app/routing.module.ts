import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/institutional/app.module').then(m => m.InstitutionalAppModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./components/account/app.module').then(m => m.AccontAppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
