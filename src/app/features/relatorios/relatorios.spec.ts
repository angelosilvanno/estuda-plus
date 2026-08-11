import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorios } from './relatorios';

describe('Relatorios', () => {
  let component: Relatorios;
  let fixture: ComponentFixture<Relatorios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatorios],
    }).compileComponents();

    fixture = TestBed.createComponent(Relatorios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
