import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoAnulado } from './voto-anulado';

describe('VotoAnulado', () => {
  let component: VotoAnulado;
  let fixture: ComponentFixture<VotoAnulado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotoAnulado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotoAnulado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
