import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInVotante } from './log-in-votante';

describe('LogInVotante', () => {
  let component: LogInVotante;
  let fixture: ComponentFixture<LogInVotante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInVotante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInVotante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
