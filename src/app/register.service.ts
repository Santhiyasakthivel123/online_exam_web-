import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  postMethod(data:any){
    return this.http.post(`http://localhost:3000/post/`,data);
  }
  
  getMethod(){
     
     return this.http.get(`http://localhost:3000/post/`)
  }
}
