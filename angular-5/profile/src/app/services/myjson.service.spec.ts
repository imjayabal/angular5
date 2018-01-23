import { TestBed, inject } from '@angular/core/testing';

import { MyjsonService } from './myjson.service';

describe('MyjsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyjsonService]
    });
  });

  it('should be created', inject([MyjsonService], (service: MyjsonService) => {
    expect(service).toBeTruthy();
  }));
});
