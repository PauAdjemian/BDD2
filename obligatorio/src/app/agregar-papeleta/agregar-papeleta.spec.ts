import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPapeleta } from './agregar-papeleta';

describe('AgregarPapeleta', () => {
  let component: AgregarPapeleta;
  let fixture: ComponentFixture<AgregarPapeleta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPapeleta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPapeleta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
