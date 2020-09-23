import { TestBed } from '@angular/core/testing';

import { GpLibEmployeeProximityCheckService } from './gp-lib-employee-proximity-check.service';

describe('GpLibEmployeeProximityCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpLibEmployeeProximityCheckService = TestBed.get(GpLibEmployeeProximityCheckService);
    expect(service).toBeTruthy();
  });
});
