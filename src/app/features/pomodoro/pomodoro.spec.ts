import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pomodoro } from './pomodoro';

describe('Pomodoro', () => {
  let component: Pomodoro;
  let fixture: ComponentFixture<Pomodoro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pomodoro],
    }).compileComponents();

    fixture = TestBed.createComponent(Pomodoro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
