import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarParticipacion } from './agregar-participacion';

describe('AgregarParticipacion', () => {
  let component: AgregarParticipacion;
  let fixture: ComponentFixture<AgregarParticipacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarParticipacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarParticipacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
