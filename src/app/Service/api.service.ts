import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }

  // API Address for the communication with backend
 //  $baseUrl = "localhost:8080/api/v1/";
  // API List
  // Post Data Of The Product

  postProduct(value : any){
    return this.http.post<any>('http://localhost:8080/posts', value)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // Get Product Details from backend
  getProduct(){
    return this.http.get<any>('http://localhost:8080/posts')
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  //Edit the product details By ID
  updateProduct(value : any, id:number){
    return this.http.put<any>('http://localhost:8080/posts/' +  id,value)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  // Delete the product by ID
  deleteProduct(id : number){
    return this.http.delete<any>('http://localhost:8080/posts/' + id)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

}
