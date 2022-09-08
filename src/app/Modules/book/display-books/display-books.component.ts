import { Component, OnInit } from '@angular/core';
import { Ibooks } from 'src/app/Models/Book.model';
import { BookService } from 'src/app/Services/Book Service/BookDetails.service';
import { BookDataService } from 'src/app/Services/Book Service/BookDetailsData.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css'],
  providers:[BookService]
})
export class DisplayBooksComponent implements OnInit {

  data:Ibooks[]=[];
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.bookservice.getBooksByApi().subscribe((bookdata:Ibooks[])=>{
      this.data=bookdata;
    })
    };

  selectedLocation = 'all';
  selectedCollegeLocation = 'all';
  selectedCourse = 'all';
  selectedBookname = 'all';

}
