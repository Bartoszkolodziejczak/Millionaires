import { TestBed, async, inject } from '@angular/core/testing';

import { InitWinGuard } from './init-win.guard';

describe('InitWinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitWinGuard]
    });
  });

  it('should ...', inject([InitWinGuard], (guard: InitWinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
