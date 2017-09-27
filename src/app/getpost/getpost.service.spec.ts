import { TestBed, inject } from '@angular/core/testing';

import { GetpostService } from './getpost.service';

describe('GetpostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetpostService]
    });
  });

  it('should be created', inject([GetpostService], (service: GetpostService) => {
    expect(service).toBeTruthy();
  }));
});
