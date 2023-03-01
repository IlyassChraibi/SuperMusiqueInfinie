/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConcertService } from './concert.service';

describe('Service: Concert', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcertService]
    });
  });

  it('should ...', inject([ConcertService], (service: ConcertService) => {
    expect(service).toBeTruthy();
  }));
});
