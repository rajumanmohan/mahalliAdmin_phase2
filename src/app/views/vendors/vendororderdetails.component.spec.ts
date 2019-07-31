import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendororderdetailsComponent } from './vendororderdetails.component';

describe('VendororderdetailsComponent', () => {
  let component: VendororderdetailsComponent;
  let fixture: ComponentFixture<VendororderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendororderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendororderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
