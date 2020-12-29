import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardScaffoldComponent } from './admin-dashboard-scaffold.component';

describe('AdminDashboardScaffoldComponent', () => {
  let component: AdminDashboardScaffoldComponent;
  let fixture: ComponentFixture<AdminDashboardScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardScaffoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
