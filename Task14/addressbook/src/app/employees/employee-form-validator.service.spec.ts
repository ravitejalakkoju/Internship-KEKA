import { TestBed } from '@angular/core/testing';

import { EmployeeFormValidatorService } from './employee-form-validator.service';

describe('EmployeeFormValidatorService', () => {
  let service: EmployeeFormValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFormValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
