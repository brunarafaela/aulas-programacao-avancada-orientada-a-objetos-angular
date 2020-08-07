import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecCursosComponent } from './fatec-cursos.component';

describe('FatecCursosComponent', () => {
  let component: FatecCursosComponent;
  let fixture: ComponentFixture<FatecCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatecCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatecCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
