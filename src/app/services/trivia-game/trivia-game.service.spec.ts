import { TestBed } from '@angular/core/testing';

import { TriviaGameService } from './trivia-game.service';

describe('TriviaGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriviaGameService = TestBed.get(TriviaGameService);
    expect(service).toBeTruthy();
  });
});
