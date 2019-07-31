import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandbannerComponent } from './brandbanner.component';

describe('BrandbannerComponent', () => {
  let component: BrandbannerComponent;
  let fixture: ComponentFixture<BrandbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
