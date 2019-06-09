import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class StudentAuthGuardGuard implements  CanActivate {

  constructor(private router: Router) { }

  canActivate()
  {
      if (localStorage.getItem('StudentUser'))
      {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page
      this.router.navigate(['/Login']);
      return false;
  }
}
