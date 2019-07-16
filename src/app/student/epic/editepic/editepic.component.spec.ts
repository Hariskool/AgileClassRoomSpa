import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditepicComponent } from './editepic.component';

describe('EditepicComponent', () => {
  let component: EditepicComponent;
  let fixture: ComponentFixture<EditepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
