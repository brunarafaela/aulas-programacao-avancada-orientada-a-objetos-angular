import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'José';
  idade = 20;

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  nome;
  exibirCaixa = false;
  produto;
  numero;

  gerarNumero() {
    this.numero = Math.floor(Math.random() * 6) + 1;
  }

  alterarNome(nome) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }

  adicionar(nomeInput) {
    console.log(nomeInput.value);
    this.nome = nomeInput.value;
    this.exibirCaixa = true;
    console.log('Adicionando...');
  }

  alterarProduto(produtoInput) {
    this.produto = 'Novo produto: ' + produtoInput.value;
  }
}
