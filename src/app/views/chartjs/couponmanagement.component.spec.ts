import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponmanagementComponent } from './couponmanagement.component';

describe('CouponmanagementComponent', () => {
  let component: CouponmanagementComponent;
  let fixture: ComponentFixture<CouponmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
