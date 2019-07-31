import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellersComponent } from './topsellers.component';

describe('TopsellersComponent', () => {
  let component: TopsellersComponent;
  let fixture: ComponentFixture<TopsellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
