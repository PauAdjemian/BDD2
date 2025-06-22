import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarCircuito } from './cerrar-circuito';

describe('CerrarCircuito', () => {
  let component: CerrarCircuito;
  let fixture: ComponentFixture<CerrarCircuito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerrarCircuito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerrarCircuito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
