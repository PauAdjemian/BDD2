import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCandidato } from './agregar-candidato';

describe('AgregarCandidato', () => {
  let component: AgregarCandidato;
  let fixture: ComponentFixture<AgregarCandidato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarCandidato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCandidato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
