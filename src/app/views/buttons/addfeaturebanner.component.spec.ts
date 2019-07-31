import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfeaturebannerComponent } from './addfeaturebanner.component';

describe('AddfeaturebannerComponent', () => {
  let component: AddfeaturebannerComponent;
  let fixture: ComponentFixture<AddfeaturebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfeaturebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfeaturebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
