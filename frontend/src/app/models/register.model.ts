export class Register {
    Nome: string;
    Sobrenome: string;
    Idade: string;

    constructor(public nome: string, public sobrenome: string, public idade: string){
      
      this.Nome = nome;
      this.Sobrenome = sobrenome;
      this.Idade = idade;
    }
  }