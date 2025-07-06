import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVotanteEleccion } from './agregar-votante-eleccion';

describe('AgregarVotanteEleccion', () => {
  let component: AgregarVotanteEleccion;
  let fixture: ComponentFixture<AgregarVotanteEleccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarVotanteEleccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVotanteEleccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
