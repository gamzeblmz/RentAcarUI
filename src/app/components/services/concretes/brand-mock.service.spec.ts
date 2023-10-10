import { TestBed } from '@angular/core/testing';

import { BrandMockService } from './BrandMockService';

describe('BrandMockService', () => {
  let service: BrandMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
