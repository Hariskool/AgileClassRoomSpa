import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoordinatorComponent } from './all-coordinator.component';

describe('AllCoordinatorComponent', () => {
  let component: AllCoordinatorComponent;
  let fixture: ComponentFixture<AllCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
