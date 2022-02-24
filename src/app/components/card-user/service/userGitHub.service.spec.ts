/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserGitHubService } from './userGitHub.service';

describe('Service: UserGitHub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGitHubService]
    });
  });

  it('should ...', inject([UserGitHubService], (service: UserGitHubService) => {
    expect(service).toBeTruthy();
  }));
});
