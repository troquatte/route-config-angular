import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Route
import { InstitutionalAppRoutingModule } from './routing.module';

//Main Component
import { InstitutionalAppComponent } from './app.component';

//Components
import { HomeInstitutionalComponent } from './home/home.component';
import { AboutInstitutionalComponent } from './about/about.component';


@NgModule({
  declarations: [
    InstitutionalAppComponent,
    HomeInstitutionalComponent,
    AboutInstitutionalComponent,
  ],
  imports: [
    CommonModule,
    InstitutionalAppRoutingModule
  ],
  providers: [],
  bootstrap: [InstitutionalAppComponent]
})
export class InstitutionalAppModule { }
