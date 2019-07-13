import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddannouceComponent } from './addannouce.component';

describe('AddannouceComponent', () => {
  let component: AddannouceComponent;
  let fixture: ComponentFixture<AddannouceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddannouceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddannouceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
