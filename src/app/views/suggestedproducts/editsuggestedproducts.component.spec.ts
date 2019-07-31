import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsuggestedproductsComponent } from './editsuggestedproducts.component';

describe('EditsuggestedproductsComponent', () => {
  let component: EditsuggestedproductsComponent;
  let fixture: ComponentFixture<EditsuggestedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsuggestedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsuggestedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
