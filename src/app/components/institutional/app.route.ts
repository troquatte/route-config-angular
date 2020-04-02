import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutionalAppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutionalAppComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'sobre', component: HomeComponent},
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionalAppRoutingModule { }
