import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwholesellerComponent } from './addwholeseller.component';

describe('AddwholesellerComponent', () => {
  let component: AddwholesellerComponent;
  let fixture: ComponentFixture<AddwholesellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwholesellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwholesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
