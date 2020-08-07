import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textoBotao= "Esconder/Exibir"
  esconder = false;

  pessoas = [
    {
      nome: "Jose",
      idade: 18
    },
    {
      nome: "Maria",
      idade: 22
    },
    {
      nome: "Bruna",
      idade: 27
    }
  ]

  alterarExibicao(){
    this.textoBotao = this.esconder ? "Exibir" : "Esconder";
    this.esconder = !this.esconder;
  }

  onAdicionarPessoa(pessoa) {
    this.pessoas = [pessoa, ...this.pessoas];
  }
}
