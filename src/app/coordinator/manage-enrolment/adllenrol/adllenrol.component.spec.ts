import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdllenrolComponent } from './adllenrol.component';

describe('AdllenrolComponent', () => {
  let component: AdllenrolComponent;
  let fixture: ComponentFixture<AdllenrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdllenrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdllenrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
