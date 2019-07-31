import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubsubcatComponent } from './addsubsubcat.component';

describe('AddsubsubcatComponent', () => {
  let component: AddsubsubcatComponent;
  let fixture: ComponentFixture<AddsubsubcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubsubcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubsubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
