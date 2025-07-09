import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStudentComponent } from './single-student.component';

describe('SingleStudentComponent', () => {
  let component: SingleStudentComponent;
  let fixture: ComponentFixture<SingleStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleStudentComponent]
    });
    fixture = TestBed.createComponent(SingleStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
