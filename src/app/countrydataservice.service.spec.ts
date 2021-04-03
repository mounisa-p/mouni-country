import { TestBed } from '@angular/core/testing';

import { CountrydataserviceService } from './countrydataservice.service';

describe('CountrydataserviceService', () => {
  let service: CountrydataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrydataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
