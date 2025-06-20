import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Votado } from './votado';

describe('Votado', () => {
  let component: Votado;
  let fixture: ComponentFixture<Votado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Votado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Votado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
