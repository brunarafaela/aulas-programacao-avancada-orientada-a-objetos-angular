import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatecComponent } from './fatec/fatec.component';
import { FatecCursosComponent } from './fatec-cursos/fatec-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecComponent,
    FatecCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
