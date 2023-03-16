import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data:any)
  {
    return this.http.post<any>("http://localhost:3000/productlist/",data);
  }
  getProduct(){
    return this.http.get<string>("http://localhost:3000/productlist/");
  }
  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/productlist/"+id);
  }

}
