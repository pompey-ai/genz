import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Modules/landing-page/landing-page.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { LoginComponent } from './Modules/authentication/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
