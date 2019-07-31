import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstellerComponent } from './newsteller.component';

describe('NewstellerComponent', () => {
  let component: NewstellerComponent;
  let fixture: ComponentFixture<NewstellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
