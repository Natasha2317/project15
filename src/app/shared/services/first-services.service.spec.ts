import { TestBed } from '@angular/core/testing';

import { FirstServicesService } from './first-services.service';

describe('FirstServicesService', () => {
  let service: FirstServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
