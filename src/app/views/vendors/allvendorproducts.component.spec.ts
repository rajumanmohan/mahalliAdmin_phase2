import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvendorproductsComponent } from './allvendorproducts.component';

describe('AllvendorproductsComponent', () => {
  let component: AllvendorproductsComponent;
  let fixture: ComponentFixture<AllvendorproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllvendorproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvendorproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
