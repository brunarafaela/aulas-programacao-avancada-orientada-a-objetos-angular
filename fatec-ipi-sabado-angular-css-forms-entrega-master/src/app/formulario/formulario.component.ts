import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  cursos = [
    'Análise e Desenvolvimento de Sistemas',
    'Recursos Humanos',
    'Gestão Comercial',
    'Eventos',
  ];

  pessoa: Pessoa = new Pessoa();

  salvar(pessoaForm) {
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.idade = pessoaForm.value.idade;
    this.pessoa.curso = pessoaForm.value.curso;
    console.log(this.pessoa);
    console.log(pessoaForm);
  }


  obterEstilosParaOBotao() {
    return {
      backgroundColor: '#ccc',
      padding: '8px',
      border: 'none',
      borderRadius: '4px',
    };
  }
}

