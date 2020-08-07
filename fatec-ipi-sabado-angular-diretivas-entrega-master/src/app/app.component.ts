import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cursos = [
    {
      nome: "Análise e Desenvolvimento de Sistemas",
      turno: "Tarde"
    },

  ]
  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }
}
