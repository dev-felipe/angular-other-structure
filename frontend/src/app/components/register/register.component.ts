import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Peoples } from 'src/app/models/peoples.model';
import { Register } from 'src/app/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myService: RegisterService) { }

  nome: string = "";
  sobrenome: string = "";
  idade: string = "";

  pessoa: Register;

  ngOnInit() {
  }

  insertNew(){
    this.pessoa = new Register(this.nome, this.sobrenome, this.idade);
    this.myService.insertNewService(this.pessoa)
    .subscribe(data => {
      console.log(this.pessoa);
      console.log(data);
    });
  }

}
