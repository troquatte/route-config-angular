import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountAppComponent } from './app.component';

import { AuthAccountComponent } from './auth/auth.component';
import { CreateAccountComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: AccountAppComponent,
    children: [
      { path: '', component: AuthAccountComponent},
      { path: 'create', component: CreateAccountComponent},
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAppRoutingModule { }
