import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Route
import { LoginAppRoutingModule } from './routing.module';

//Main Component
import { AccountAppComponent } from './app.component';

//Components
import { AuthAccountComponent } from './auth/auth.component';
import { CreateAccountComponent } from './create/create.component';

@NgModule({
  declarations: [
    AccountAppComponent,
    AuthAccountComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    LoginAppRoutingModule
  ],
  providers: [],
  bootstrap: [AccountAppComponent]
})
export class AccontAppModule { }
