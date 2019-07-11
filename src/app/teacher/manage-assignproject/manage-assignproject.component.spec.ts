import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssignprojectComponent } from './manage-assignproject.component';

describe('ManageAssignprojectComponent', () => {
  let component: ManageAssignprojectComponent;
  let fixture: ComponentFixture<ManageAssignprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAssignprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssignprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
