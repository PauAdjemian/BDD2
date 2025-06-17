import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModo } from './boton-modo';

describe('BotonModo', () => {
  let component: BotonModo;
  let fixture: ComponentFixture<BotonModo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonModo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonModo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
