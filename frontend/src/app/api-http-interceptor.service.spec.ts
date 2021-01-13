import { TestBed } from '@angular/core/testing';

import { ApiHttpInterceptorService } from './api-http-interceptor.service';

describe('ApiHttpInterceptorService', () => {
  let service: ApiHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
