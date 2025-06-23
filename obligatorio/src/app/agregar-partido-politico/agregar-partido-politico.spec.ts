import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPartidoPolitico } from './agregar-partido-politico';

describe('AgregarPartidoPolitico', () => {
  let component: AgregarPartidoPolitico;
  let fixture: ComponentFixture<AgregarPartidoPolitico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPartidoPolitico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPartidoPolitico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
