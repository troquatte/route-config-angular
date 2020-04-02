import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Main Components
import { InstitutionalAppComponent } from './app.component';

//Components
import { HomeInstitutionalComponent } from './home/home.component';
import { AboutInstitutionalComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutionalAppComponent,
    children: [
      { path: '', component: HomeInstitutionalComponent },
      {
        path: 'about',
        component: AboutInstitutionalComponent,
      }
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionalAppRoutingModule { }
