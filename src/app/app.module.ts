import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Route
import { AppRoutingModule } from './routing.module';

//Main Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
