import { TestBed } from '@angular/core/testing';

import { FetchAllPlayersService } from './fetch-all-players.service';

describe('FetchPlayersService', () => {
  let service: FetchAllPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAllPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
