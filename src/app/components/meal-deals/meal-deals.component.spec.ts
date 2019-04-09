import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDealsComponent } from './meal-deals.component';

describe('MealDealsComponent', () => {
  let component: MealDealsComponent;
  let fixture: ComponentFixture<MealDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
