import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/instutional/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'accounts',
    loadChildren: () => import('./components/account/app.module').then(m => m.AccontAppModule)
  },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
