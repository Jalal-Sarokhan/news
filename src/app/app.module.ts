import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TopheadingComponent } from './topheading/topheading.component' 
import {NewsapiservicesService} from './service/newsapiservices.service';
import { UsComponent } from './us/us.component';
import { EgComponent } from './eg/eg.component';
import { JisComponent } from './jis/jis.component'
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    UsComponent,
    EgComponent,
    JisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiservicesService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
