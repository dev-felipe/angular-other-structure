import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PeoplesService {
  constructor(private http: HttpClient) {}

  getAllOfLIST() {
    return this.http.get('https://my-json-server.typicode.com/dev-felipe/api-fake/pessoa');
  };

  deleteRegisterService(id){
    return this.http.delete('https://my-json-server.typicode.com/dev-felipe/api-fake/pessoa/' + id);
  }
}