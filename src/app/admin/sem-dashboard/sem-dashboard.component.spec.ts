import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemDashboardComponent } from './sem-dashboard.component';

describe('SemDashboardComponent', () => {
  let component: SemDashboardComponent;
  let fixture: ComponentFixture<SemDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemDashboardComponent]
    });
    fixture = TestBed.createComponent(SemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
