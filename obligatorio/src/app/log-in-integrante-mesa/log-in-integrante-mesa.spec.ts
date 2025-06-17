import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInIntegranteMesa } from './log-in-integrante-mesa';

describe('LogInIntegranteMesa', () => {
  let component: LogInIntegranteMesa;
  let fixture: ComponentFixture<LogInIntegranteMesa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInIntegranteMesa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInIntegranteMesa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
