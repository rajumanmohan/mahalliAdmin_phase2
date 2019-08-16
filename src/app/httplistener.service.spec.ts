import { TestBed } from '@angular/core/testing';

import { HTTPListenerService } from './httplistener.service';

describe('HTTPListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HTTPListenerService = TestBed.get(HTTPListenerService);
    expect(service).toBeTruthy();
  });
});
