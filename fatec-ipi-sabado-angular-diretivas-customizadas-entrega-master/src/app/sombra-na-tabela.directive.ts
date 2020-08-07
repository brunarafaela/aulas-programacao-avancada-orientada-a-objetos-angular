import {
  Directive,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]',
  exportAs: 'sombraNoComponente',
})
export class SombraNaTabelaDirective {
  @HostBinding('style.backgroundColor') sombra: string;
  @Input('appSombraNaTabela') sombraEntrada: string;

  @HostListener('mouseover') quandoOMousePassarPorCima() {
    this.sombra = this.sombraEntrada;
  }
  @HostListener('mouseleave') quandoOMouseSair() {
    this.sombra = '';
  }
}
