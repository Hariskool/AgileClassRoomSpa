import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoordinatorComponent } from './edit-coordinator.component';

describe('EditCoordinatorComponent', () => {
  let component: EditCoordinatorComponent;
  let fixture: ComponentFixture<EditCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
