import { TestBed } from '@angular/core/testing';

import { DadosclienteService } from './dashservice.service';

describe('DashserviceService', () => {
  let service: DadosclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
