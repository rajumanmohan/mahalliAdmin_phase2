import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbannersComponent } from './addbanners.component';

describe('AddbannersComponent', () => {
  let component: AddbannersComponent;
  let fixture: ComponentFixture<AddbannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
