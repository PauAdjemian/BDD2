import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEleccion } from './agregar-eleccion';

describe('AgregarEleccion', () => {
  let component: AgregarEleccion;
  let fixture: ComponentFixture<AgregarEleccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEleccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEleccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
