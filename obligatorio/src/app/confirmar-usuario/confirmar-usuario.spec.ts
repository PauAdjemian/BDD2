import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarUsuario } from './confirmar-usuario';

describe('ConfirmarUsuario', () => {
  let component: ConfirmarUsuario;
  let fixture: ComponentFixture<ConfirmarUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
