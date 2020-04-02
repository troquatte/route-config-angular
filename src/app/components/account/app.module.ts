import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Route
import { LoginAppRoutingModule } from './app.route';

//Main Component
import { AccountAppComponent } from './app.component';

import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AccountAppComponent,
    CreateComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    LoginAppRoutingModule
  ],
  providers: [],
  bootstrap: [AccountAppComponent]
})
export class AccontAppModule { }
