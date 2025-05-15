import { TestBed } from '@angular/core/testing';

import { FavTeamService } from './fav-team.service';

describe('FavTeamService', () => {
  let service: FavTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
