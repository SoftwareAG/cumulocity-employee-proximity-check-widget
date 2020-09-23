import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpLibEmployeeProximityCheckComponent } from './gp-lib-employee-proximity-check.component';

describe('GpLibEmployeeProximityCheckComponent', () => {
  let component: GpLibEmployeeProximityCheckComponent;
  let fixture: ComponentFixture<GpLibEmployeeProximityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpLibEmployeeProximityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpLibEmployeeProximityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
