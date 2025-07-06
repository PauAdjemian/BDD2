import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoBlanco } from './voto-blanco';

describe('VotoBlanco', () => {
  let component: VotoBlanco;
  let fixture: ComponentFixture<VotoBlanco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotoBlanco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotoBlanco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
