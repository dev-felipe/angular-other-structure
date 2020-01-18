import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  insertNewService(obj){
    return this.http.post('http://localhost:8080/pessoas/add/', obj);
  }
}