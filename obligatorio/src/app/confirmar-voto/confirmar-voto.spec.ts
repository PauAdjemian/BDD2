import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarVoto } from './confirmar-voto';

describe('ConfirmarVoto', () => {
  let component: ConfirmarVoto;
  let fixture: ComponentFixture<ConfirmarVoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarVoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarVoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
