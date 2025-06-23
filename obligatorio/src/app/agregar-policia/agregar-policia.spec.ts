import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPolicia } from './agregar-policia';

describe('AgregarPolicia', () => {
  let component: AgregarPolicia;
  let fixture: ComponentFixture<AgregarPolicia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPolicia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPolicia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
