import { TestBed } from '@angular/core/testing';

import { RankingJokesService } from './ranking-jokes.service';

describe('RankingJokesService', () => {
  let service: RankingJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingJokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
