import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasAdmin } from './tareas-admin';

describe('TareasAdmin', () => {
  let component: TareasAdmin;
  let fixture: ComponentFixture<TareasAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
