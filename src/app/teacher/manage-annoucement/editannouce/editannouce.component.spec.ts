import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditannouceComponent } from './editannouce.component';

describe('EditannouceComponent', () => {
  let component: EditannouceComponent;
  let fixture: ComponentFixture<EditannouceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditannouceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditannouceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
