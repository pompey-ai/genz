import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageModule } from './Modules/landing-page/landing-page.module';
import { BookModule } from './Modules/book/book.module';
import { BookService } from './Services/Book Service/BookDetails.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookDataService } from './Services/Book Service/BookDetailsData.service';
import { LoginComponent } from './Modules/authentication/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingPageModule,BookModule,
    HttpClientModule, HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(BookDataService),
    ,MatFormFieldModule,MatInputModule
    
  
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
