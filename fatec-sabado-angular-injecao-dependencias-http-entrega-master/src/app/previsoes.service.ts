import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PrevisoesService {
  constructor(public httpClient: HttpClient) {}

  public obterPrevisoes(cidadeInputText): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>(
      'http://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          q: cidadeInputText,
          appid: '875250920f70d7f25c06919318cbe794',
          units: 'metric',
          lang: 'pt_br',
          cnt: '16',
        },
      }
    );
  }
}
