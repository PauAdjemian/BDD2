import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstablecimiento } from './agregar-establecimiento';

describe('AgregarEstablecimiento', () => {
  let component: AgregarEstablecimiento;
  let fixture: ComponentFixture<AgregarEstablecimiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEstablecimiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstablecimiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
