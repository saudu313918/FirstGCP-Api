import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
   headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  

  postProduct(value : any){
    return this.http.post<any>('https://8080-cf41a445-1761-453c-971a-db1dc491e529.cs-asia-southeast1-ajrg.cloudshell.dev/aliens', value)
    .pipe(map((res:any)=>{
      return res;
    },{ 'headers': this.headers }))
  }

  // Get Product Details from backend
  getProduct(){
    return this.http.get<any>('https://8080-cf41a445-1761-453c-971a-db1dc491e529.cs-asia-southeast1-ajrg.cloudshell.dev/aliens')
    .pipe(map((res : any)=>{
      return res;
    },{ 'headers': this.headers }))
  }

  //Edit the product details By ID
  updateProduct(value : any, id:number){
    return this.http.put<any>('https://8080-cf41a445-1761-453c-971a-db1dc491e529.cs-asia-southeast1-ajrg.cloudshell.dev/aliens/' +  id,value)
    .pipe(map((res : any)=>{
      return res;
    },{ 'headers': this.headers }))
  }

  // Delete the product by ID
  deleteProduct(id : number){
    return this.http.delete<any>('https://8080-cf41a445-1761-453c-971a-db1dc491e529.cs-asia-southeast1-ajrg.cloudshell.dev/aliens/' + id)
    .pipe(map((res : any)=>{
      return res;
    },{ 'headers': this.headers }))
  }

}
