import { TestBed } from '@angular/core/testing';

import { ActuarialService } from './actuarial.service';

describe('ActuarialService', () => {
  let service: ActuarialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActuarialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
