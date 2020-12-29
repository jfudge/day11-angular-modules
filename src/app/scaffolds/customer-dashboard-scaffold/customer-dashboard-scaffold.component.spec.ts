import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashboardScaffoldComponent } from './customer-dashboard-scaffold.component';

describe('CustomerDashboardScaffoldComponent', () => {
  let component: CustomerDashboardScaffoldComponent;
  let fixture: ComponentFixture<CustomerDashboardScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDashboardScaffoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDashboardScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
