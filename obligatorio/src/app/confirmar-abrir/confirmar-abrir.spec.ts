import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarAbrir } from './confirmar-abrir';

describe('ConfirmarAbrir', () => {
  let component: ConfirmarAbrir;
  let fixture: ComponentFixture<ConfirmarAbrir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarAbrir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarAbrir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
