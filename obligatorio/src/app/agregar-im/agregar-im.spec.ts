import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarIM } from './agregar-im';

describe('AgregarIM', () => {
  let component: AgregarIM;
  let fixture: ComponentFixture<AgregarIM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarIM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarIM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
