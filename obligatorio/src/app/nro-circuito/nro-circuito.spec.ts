import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NroCircuito } from './nro-circuito';

describe('NroCircuito', () => {
  let component: NroCircuito;
  let fixture: ComponentFixture<NroCircuito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NroCircuito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NroCircuito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
