import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCerrar } from './confirmar-cerrar';

describe('ConfirmarCerrar', () => {
  let component: ConfirmarCerrar;
  let fixture: ComponentFixture<ConfirmarCerrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarCerrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarCerrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
