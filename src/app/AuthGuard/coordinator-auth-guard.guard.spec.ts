import { TestBed, async, inject } from '@angular/core/testing';

import { CoordinatorAuthGuardGuard } from './coordinator-auth-guard.guard';

describe('CoordinatorAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoordinatorAuthGuardGuard]
    });
  });

  it('should ...', inject([CoordinatorAuthGuardGuard], (guard: CoordinatorAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
