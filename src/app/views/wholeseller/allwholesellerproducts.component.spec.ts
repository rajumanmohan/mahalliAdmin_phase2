import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllwholesellerproductsComponent } from './allwholesellerproducts.component';

describe('AllwholesellerproductsComponent', () => {
  let component: AllwholesellerproductsComponent;
  let fixture: ComponentFixture<AllwholesellerproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllwholesellerproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllwholesellerproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
