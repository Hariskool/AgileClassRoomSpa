import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaprojectComponent } from './editaproject.component';

describe('EditaprojectComponent', () => {
  let component: EditaprojectComponent;
  let fixture: ComponentFixture<EditaprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
