import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebannerComponent } from './singlebanner.component';

describe('SinglebannerComponent', () => {
  let component: SinglebannerComponent;
  let fixture: ComponentFixture<SinglebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
