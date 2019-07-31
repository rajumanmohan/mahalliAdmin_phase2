import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesellerproductsComponent } from './wholesellerproducts.component';

describe('WholesellerproductsComponent', () => {
  let component: WholesellerproductsComponent;
  let fixture: ComponentFixture<WholesellerproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesellerproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesellerproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
