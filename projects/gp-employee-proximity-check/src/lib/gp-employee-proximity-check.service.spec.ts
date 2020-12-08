import { TestBed } from '@angular/core/testing';

import { GpEmployeeProximityCheckService } from './gp-employee-proximity-check.service';

describe('GpEmployeeProximityCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpEmployeeProximityCheckService = TestBed.get(GpEmployeeProximityCheckService);
    expect(service).toBeTruthy();
  });
});
