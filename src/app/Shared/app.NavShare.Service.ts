import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class NavService {
  public NavItems = new BehaviorSubject<any>('');
  currentNav = this.NavItems.asObservable();
  constructor(){
    console.log('saerve')

  }
  AdminNav(nav: any){
    console.log('navbar-' + nav);
    this.NavItems.next(nav);

  }

}
