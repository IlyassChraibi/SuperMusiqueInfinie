/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtisteService } from './artiste.service';

describe('Service: Artiste', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtisteService]
    });
  });

  it('should ...', inject([ArtisteService], (service: ArtisteService) => {
    expect(service).toBeTruthy();
  }));
});
