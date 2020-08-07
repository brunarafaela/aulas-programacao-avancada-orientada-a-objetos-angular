import { Component } from '@angular/core';
import { Previsao } from './model/previsao';
import { PrevisoesService } from './previsoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private previsoes: Previsao[];

  texto: string;

  constructor(private previsoesService: PrevisoesService) {
  }
  pesquisar(cidadeInputText): void {
    this.texto = cidadeInputText.value;

    this.previsoesService.obterPrevisoes(this.texto).subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
    });
  }
}
