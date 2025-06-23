import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVotante } from './agregar-votante';

describe('AgregarVotante', () => {
  let component: AgregarVotante;
  let fixture: ComponentFixture<AgregarVotante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarVotante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVotante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
