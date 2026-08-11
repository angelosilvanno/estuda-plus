import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Revisoes } from './revisoes';

describe('Revisoes', () => {
  let component: Revisoes;
  let fixture: ComponentFixture<Revisoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Revisoes],
    }).compileComponents();

    fixture = TestBed.createComponent(Revisoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
