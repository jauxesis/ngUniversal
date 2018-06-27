import { TestBed, inject } from '@angular/core/testing';

import { MytestService } from './mytest.service';

describe('MytestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MytestService]
    });
  });

  it('should be created', inject([MytestService], (service: MytestService) => {
    expect(service).toBeTruthy();
  }));
});
