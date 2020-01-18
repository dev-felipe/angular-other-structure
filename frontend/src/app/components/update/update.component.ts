import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from 'src/app/services/update.service';
import { Peoples } from 'src/app/models/peoples.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private routerParam: ActivatedRoute, private myService: UpdateService) { }
  
  id: number = 0;
  nome: string = "";
  sobrenome: string = "";
  idade: string = "";

  status: boolean = true;

  oldRegister: Peoples;

  ngOnInit() {
    const firstParam: string = this.routerParam.snapshot.paramMap.get('id');
    this.myService.getByIdService(firstParam).subscribe(data => {
      this.id = data['id'];
      this.nome = data['nome'];
      this.sobrenome = data['sobrenome'];
      this.idade = data['idade'];
    })
  }

  updateRegister(){
    this.oldRegister= new Peoples(this.id, this.nome, this.sobrenome, this.idade);
    this.myService.updateRegisterService(this.id, this.oldRegister).subscribe(data => {
    });
  }
}
