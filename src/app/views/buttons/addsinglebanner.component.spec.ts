import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsinglebannerComponent } from './addsinglebanner.component';

describe('AddsinglebannerComponent', () => {
  let component: AddsinglebannerComponent;
  let fixture: ComponentFixture<AddsinglebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsinglebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsinglebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
