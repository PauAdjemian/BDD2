import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCircuito } from './agregar-circuito';

describe('AgregarCircuito', () => {
  let component: AgregarCircuito;
  let fixture: ComponentFixture<AgregarCircuito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarCircuito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCircuito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
