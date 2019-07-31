import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddecommercebannersComponent } from './addecommercebanners.component';

describe('AddecommercebannersComponent', () => {
  let component: AddecommercebannersComponent;
  let fixture: ComponentFixture<AddecommercebannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddecommercebannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddecommercebannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
