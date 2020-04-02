import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Route
import { AppRoutingModule } from './routing.module';

//Main Component
import { AppComponent } from './app.component';

//Components
import { HomeComponent } from './components/instutional/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
