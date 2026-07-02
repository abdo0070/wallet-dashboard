import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestTable } from './invest-table';

describe('InvestTable', () => {
  let component: InvestTable;
  let fixture: ComponentFixture<InvestTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestTable],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
