import { MyjsonService } from './services/myjson.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// app pages components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpComponent } from './http/http.component';
import { HttpFakeServerComponent } from './http-fake-server/http-fake-server.component';
import { HttpLocalComponent } from './http-local/http-local.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';

// plugins for search, sort and pagination
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { TemplateComponent } from './forms/template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HttpComponent,
    HttpFakeServerComponent,
    HttpLocalComponent,
    HeaderComponent,
    PaginationComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    MyjsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
