import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestEdit } from './invest-edit';

describe('InvestEdit', () => {
  let component: InvestEdit;
  let fixture: ComponentFixture<InvestEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
