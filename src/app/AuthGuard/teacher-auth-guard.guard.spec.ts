import { TestBed, async, inject } from '@angular/core/testing';

import { TeacherAuthGuardGuard } from './teacher-auth-guard.guard';

describe('TeacherAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherAuthGuardGuard]
    });
  });

  it('should ...', inject([TeacherAuthGuardGuard], (guard: TeacherAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
