import { TestBed } from '@angular/core/testing';

import { PopulateDropDownService } from './populate-drop-down.service';

describe('PopulateDropDownService', () => {
  let service: PopulateDropDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopulateDropDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
