import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCreate } from './invest-create';

describe('InvestCreate', () => {
  let component: InvestCreate;
  let fixture: ComponentFixture<InvestCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
