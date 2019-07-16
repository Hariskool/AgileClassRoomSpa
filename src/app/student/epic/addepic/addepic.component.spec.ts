import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddepicComponent } from './addepic.component';

describe('AddepicComponent', () => {
  let component: AddepicComponent;
  let fixture: ComponentFixture<AddepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
