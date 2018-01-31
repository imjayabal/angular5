import { ConsumeHttpServiceComponent } from './http-service/consume-http-service/consume-http-service.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpComponent } from './http-service/http/http.component';
import { HttpFakeServerComponent } from './http-service/http-fake-server/http-fake-server.component';
import { HttpLocalComponent } from './http-service/http-local/http-local.component';
import { PaginationComponent } from './http-service/pagination/pagination.component';
// forms
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

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
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'forms/template',
    component: TemplateComponent
  },
  {
    path: 'forms/reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'http-service/consume-http-service',
    component: ConsumeHttpServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
