import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlogoutComponent } from './studentlogout.component';

describe('StudentlogoutComponent', () => {
  let component: StudentlogoutComponent;
  let fixture: ComponentFixture<StudentlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
