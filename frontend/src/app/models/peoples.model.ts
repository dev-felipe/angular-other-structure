export class Peoples {
    Id: number;
    Nome: string;
    Sobrenome: string;
    Idade: string;

    constructor(public id: number, public nome: string, public sobrenome: string, public idade: string){
      this.Id = id;
      this.Nome = nome;
      this.Sobrenome = sobrenome;
      this.Idade = idade;
    }
  }