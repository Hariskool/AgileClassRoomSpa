import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherlogoutComponent } from './teacherlogout.component';

describe('TeacherlogoutComponent', () => {
  let component: TeacherlogoutComponent;
  let fixture: ComponentFixture<TeacherlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
