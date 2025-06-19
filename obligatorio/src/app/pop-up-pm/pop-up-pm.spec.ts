import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPM } from './pop-up-pm';

describe('PopUpPM', () => {
  let component: PopUpPM;
  let fixture: ComponentFixture<PopUpPM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpPM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpPM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
