import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayBooksComponent } from './display-books/display-books.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DisplayBooksComponent
  ],
  imports: [
    CommonModule,MatSelectModule,MatCardModule,
    MatButtonModule
  ],
  exports:[DisplayBooksComponent]
})
export class BookModule { }
