import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Route
import { AppRoutingModule } from './routing.module';

//Main Component
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
