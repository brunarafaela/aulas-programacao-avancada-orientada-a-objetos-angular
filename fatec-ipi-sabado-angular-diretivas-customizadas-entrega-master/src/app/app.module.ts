import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SombraNaTabelaDirective } from './sombra-na-tabela.directive';

@NgModule({
  declarations: [
    AppComponent,
    SombraNaTabelaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
