import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditenrolComponent } from './editenrol.component';

describe('EditenrolComponent', () => {
  let component: EditenrolComponent;
  let fixture: ComponentFixture<EditenrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditenrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditenrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
