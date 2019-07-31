import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbrandbannersComponent } from './addbrandbanners.component';

describe('AddbrandbannersComponent', () => {
  let component: AddbrandbannersComponent;
  let fixture: ComponentFixture<AddbrandbannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbrandbannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbrandbannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
