import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpComponent } from './http/http.component';
import { HttpFakeServerComponent } from './http-fake-server/http-fake-server.component';
import { HttpLocalComponent } from './http-local/http-local.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: 'http-fake-server',
    component: HttpFakeServerComponent
  },
  {
    path: 'http-local',
    component: HttpLocalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
