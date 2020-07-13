import { TestBed, async, inject } from '@angular/core/testing';

import { InitQuestionGuard } from './init-question.guard';

describe('InitQuestionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitQuestionGuard]
    });
  });

  it('should ...', inject([InitQuestionGuard], (guard: InitQuestionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
