import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaprojectComponent } from './addaproject.component';

describe('AddaprojectComponent', () => {
  let component: AddaprojectComponent;
  let fixture: ComponentFixture<AddaprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
