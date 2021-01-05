import { TestBed } from '@angular/core/testing';

import { PromtionServicesService } from './promtion-services.service';

describe('PromtionServicesService', () => {
  let service: PromtionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromtionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
