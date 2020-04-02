import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountAppComponent } from './app.component';

import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: AccountAppComponent,
    children: [
      { path: 'auth', component: AuthComponent},
      { path: 'create', component: CreateComponent},
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAppRoutingModule { }
