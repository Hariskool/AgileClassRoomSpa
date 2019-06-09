import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorlogoutComponent } from './coordinatorlogout.component';

describe('CoordinatorlogoutComponent', () => {
  let component: CoordinatorlogoutComponent;
  let fixture: ComponentFixture<CoordinatorlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
