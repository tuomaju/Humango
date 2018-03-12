import { TestBed, inject } from '@angular/core/testing';

import { HaasteetService } from './haasteet.service';

describe('HaasteetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HaasteetService]
    });
  });

  it('should be created', inject([HaasteetService], (service: HaasteetService) => {
    expect(service).toBeTruthy();
  }));
});
