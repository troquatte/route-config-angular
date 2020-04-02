import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionalAppComponent } from './components/institutional/app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/institutional/app.module').then(m => m.InstitutionalAppModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./components/account/app.module').then(m => m.AccontAppModule)
  },
  {
    path: '**',
    redirectTo: "http://google.com/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
