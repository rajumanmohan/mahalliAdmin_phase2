import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedproductsComponent } from './suggestedproducts.component';

describe('SuggestedproductsComponent', () => {
  let component: SuggestedproductsComponent;
  let fixture: ComponentFixture<SuggestedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
