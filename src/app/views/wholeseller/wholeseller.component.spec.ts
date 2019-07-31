import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesellerComponent } from './wholeseller.component';

describe('WholesellerComponent', () => {
  let component: WholesellerComponent;
  let fixture: ComponentFixture<WholesellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
