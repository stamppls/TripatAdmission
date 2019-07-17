import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdstudentComponent } from './adstudent.component';

describe('AdstudentComponent', () => {
  let component: AdstudentComponent;
  let fixture: ComponentFixture<AdstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
