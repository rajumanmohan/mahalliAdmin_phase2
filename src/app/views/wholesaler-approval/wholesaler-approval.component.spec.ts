import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerApprovalComponent } from './wholesaler-approval.component';

describe('WholesalerApprovalComponent', () => {
  let component: WholesalerApprovalComponent;
  let fixture: ComponentFixture<WholesalerApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
