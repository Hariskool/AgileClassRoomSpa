import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetannoucmentComponent } from './getannoucment.component';

describe('GetannoucmentComponent', () => {
  let component: GetannoucmentComponent;
  let fixture: ComponentFixture<GetannoucmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetannoucmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetannoucmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
