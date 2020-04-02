import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Route
import { InstitutionalAppRoutingModule } from './app.route';

//Main Component
import { InstitutionalAppComponent } from './app.component';

//Components
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    InstitutionalAppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    InstitutionalAppRoutingModule
  ],
  providers: [],
  bootstrap: [InstitutionalAppComponent]
})
export class InstitutionalAppModule { }
