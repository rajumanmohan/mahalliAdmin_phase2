import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubbannerComponent } from './addsubbanner.component';

describe('AddsubbannerComponent', () => {
  let component: AddsubbannerComponent;
  let fixture: ComponentFixture<AddsubbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
