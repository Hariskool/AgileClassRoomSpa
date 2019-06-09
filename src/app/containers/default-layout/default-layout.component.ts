import { NavService } from './../../Shared/app.NavShare.Service';
//import { navItems } from './../../sideNavbar/_navAdmin';
import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../sideNavbar/_navAdmin';
import { navItemsCoordinator } from '../../sideNavbar/_navCoordinator';



@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {


 public navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private _nav: NavService , @Inject(DOCUMENT) _document?: any, ) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  ngOnInit(): void {
    var adminuser = localStorage.getItem('AdminUser');
    var coordinatoruser = localStorage.getItem('CoordinatorUser');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(adminuser !=null){
      this.navItems=navItems;
    }if(coordinatoruser !=null){
      this.navItems=navItemsCoordinator;
    }
  }
  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
