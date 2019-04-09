import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KebabsComponent } from './kebabs.component';

describe('KebabsComponent', () => {
  let component: KebabsComponent;
  let fixture: ComponentFixture<KebabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KebabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KebabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
