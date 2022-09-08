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
import { NavbarModule } from './Modules/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingPageModule,BookModule,
    HttpClientModule, HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(BookDataService),
    ,
    NavbarModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
