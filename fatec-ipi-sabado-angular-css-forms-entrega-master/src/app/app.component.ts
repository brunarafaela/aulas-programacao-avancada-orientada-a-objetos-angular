import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      #header h1 {
        color: #f9f9f9;
      }
      .bg-preto {
        color: #f9f9f9;
      }
    `,
  ],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  obterClassesHeader() {
    return ['bg-vermelho'];
  }

}
