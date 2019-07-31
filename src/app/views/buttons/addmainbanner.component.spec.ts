import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmainbannerComponent } from './addmainbanner.component';

describe('AddmainbannerComponent', () => {
  let component: AddmainbannerComponent;
  let fixture: ComponentFixture<AddmainbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmainbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmainbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
