import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disciplinas } from './disciplinas';

describe('Disciplinas', () => {
  let component: Disciplinas;
  let fixture: ComponentFixture<Disciplinas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disciplinas],
    }).compileComponents();

    fixture = TestBed.createComponent(Disciplinas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
