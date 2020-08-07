import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-tabela',
  templateUrl: './curso-tabela.component.html',
  styleUrls: ['./curso-tabela.component.css']
})
export class CursoTabelaComponent  {

  @Input() curso;

}
