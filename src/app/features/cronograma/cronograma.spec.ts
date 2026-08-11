import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cronograma } from './cronograma';

describe('Cronograma', () => {
  let component: Cronograma;
  let fixture: ComponentFixture<Cronograma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cronograma],
    }).compileComponents();

    fixture = TestBed.createComponent(Cronograma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
