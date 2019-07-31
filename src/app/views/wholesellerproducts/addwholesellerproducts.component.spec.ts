import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwholesellerproductsComponent } from './addwholesellerproducts.component';

describe('AddwholesellerproductsComponent', () => {
  let component: AddwholesellerproductsComponent;
  let fixture: ComponentFixture<AddwholesellerproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwholesellerproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwholesellerproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
