import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';

 
@Injectable()
export class productService{
    bookURL:string='api/books';
    data$:any=new Subject();
    constructor(private _http:HttpClient){}

    getEmployeeByApi():Observable<any[]>{
             return this._http.get<any[]>(this.bookURL); 
          }



    fetchProductDetailsByApi(id:string){
        let subject=new ReplaySubject();
        this._http.get<any[]>(this.bookURL).subscribe((data)=>{
            this.bookURL=data.find(x=>x.proCode==id);
            subject.next(this.bookURL);
            subject.complete();
        });
        return subject;
    }


    // fetchProductDetails(id:string|null):any{
    //     return this.product.find(e=>e.proCode==id)
    //       }
    
}