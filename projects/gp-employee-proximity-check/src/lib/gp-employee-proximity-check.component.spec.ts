import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpEmployeeProximityCheckComponent } from './gp-employee-proximity-check.component';

describe('GpEmployeeProximityCheckComponent', () => {
  let component: GpEmployeeProximityCheckComponent;
  let fixture: ComponentFixture<GpEmployeeProximityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpEmployeeProximityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpEmployeeProximityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
