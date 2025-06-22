import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagListas } from './pag-listas';

describe('PagListas', () => {
  let component: PagListas;
  let fixture: ComponentFixture<PagListas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagListas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagListas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
