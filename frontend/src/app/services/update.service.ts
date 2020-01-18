import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UpdateService {
  constructor(private http: HttpClient) {}

  getByIdService(id){
    return this.http.get('https://my-json-server.typicode.com/dev-felipe/api-fake/pessoa/' + id);
  }

  updateRegisterService(id, obj){
    let header = new HttpHeaders();
    let other_header = header.append('token','teste');
    return this.http.put('http://localhost:8080/pessoas/update/' + id, obj, {headers: other_header});
  }
  
}