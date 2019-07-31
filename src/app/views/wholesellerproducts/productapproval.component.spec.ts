import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductapprovalComponent } from './productapproval.component';

describe('ProductapprovalComponent', () => {
  let component: ProductapprovalComponent;
  let fixture: ComponentFixture<ProductapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
