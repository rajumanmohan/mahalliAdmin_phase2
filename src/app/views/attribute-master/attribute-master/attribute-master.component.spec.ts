import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeMasterComponent } from './attribute-master.component';

describe('AttributeMasterComponent', () => {
  let component: AttributeMasterComponent;
  let fixture: ComponentFixture<AttributeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
