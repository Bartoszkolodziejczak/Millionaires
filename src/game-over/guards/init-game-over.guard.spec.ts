import { TestBed, async, inject } from '@angular/core/testing';

import { InitGameOverGuard } from './init-game-over.guard';

describe('InitGameOverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitGameOverGuard]
    });
  });

  it('should ...', inject([InitGameOverGuard], (guard: InitGameOverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
