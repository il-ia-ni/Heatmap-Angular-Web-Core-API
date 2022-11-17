import { TestBed } from '@angular/core/testing';

import { WebApiFetchRandomService } from './web-api-fetch-random.service';

describe('WebApiFetchRandomService', () => {
  let service: WebApiFetchRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebApiFetchRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
