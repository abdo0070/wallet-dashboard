import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentType } from './investment-type';

describe('InvestmentType', () => {
  let component: InvestmentType;
  let fixture: ComponentFixture<InvestmentType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentType],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
