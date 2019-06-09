import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CoordinatorAuthGuardGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate()
  {
      if (localStorage.getItem('CoordinatorUsere'))
      {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page
      this.router.navigate(['/Login']);
      return false;
  }
}
