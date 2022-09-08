import {InMemoryDbService} from 'angular-in-memory-web-api';

export class BookDataService implements InMemoryDbService{

    constructor(){

    }   
    createDb() {
       return {
        books:[
            {bookid:1,bookname:"Fluid Mechanics", bookauthor:"James", course:"B.Tech", price:400, sellername:"Rohan", sellerContact:3454328676, sellerAddress:"Indore"},
            {bookid:2,bookname:"OOPS", bookauthor:"Balaguruswami", course:"B.Tech", price:500, sellername:"Arjun", sellerContact:5434228676, sellerAddress:"Pune"},
            {bookid:3,bookname:"DBMS", bookauthor:"John", course:"B.Tech", price:300, sellername:"Harshal", sellerContact:6544328676, sellerAddress:"Goa"},
            {bookid:4,bookname:"Computer Network", bookauthor:"Andrew", course:"B.Tech", price:500, sellername:"Yash", sellerContact:9876328676, sellerAddress:"Puri"},
            {bookid:5,bookname:"Data Structures", bookauthor:"Mathew", course:"B.Tech", price:500, sellername:"Ankita", sellerContact:4444328676, sellerAddress:"Mysore"},
            {bookid:6,bookname:"Operating System", bookauthor:"James", course:"B.Tech", price:300, sellername:"Rohini", sellerContact:7774328676, sellerAddress:"Jammu"},
          ]
    };    
    }

}
