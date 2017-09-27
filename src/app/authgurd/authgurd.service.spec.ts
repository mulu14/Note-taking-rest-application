import { TestBed, inject } from '@angular/core/testing';

import { AuthgurdService } from './authgurd.service';

describe('AuthgurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgurdService]
    });
  });

  it('should be created', inject([AuthgurdService], (service: AuthgurdService) => {
    expect(service).toBeTruthy();
  }));
});
