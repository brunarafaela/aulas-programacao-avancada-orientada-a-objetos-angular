import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTabelaComponent } from './curso-tabela.component';

describe('CursoTabelaComponent', () => {
  let component: CursoTabelaComponent;
  let fixture: ComponentFixture<CursoTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
