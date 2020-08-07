import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatecComponent } from './fatec.component';

describe('FatecComponent', () => {
  let component: FatecComponent;
  let fixture: ComponentFixture<FatecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
