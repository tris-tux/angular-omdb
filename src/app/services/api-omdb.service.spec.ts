import { TestBed } from '@angular/core/testing';

import { ApiOmdbService } from './api-omdb.service';

describe('ApiOmdbService', () => {
  let service: ApiOmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
