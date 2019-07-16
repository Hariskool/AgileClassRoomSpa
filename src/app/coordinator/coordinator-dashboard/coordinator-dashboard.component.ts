import { CDashboard } from './Service/app.Coordinator.Service';
import { CoordinatorDashboard } from './Model/app.CoordinatorDashboardMode';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationModel } from '../../admin/admin-dashboard/Models/app.NotificationModel';
import { NotificationService } from '../../admin/admin-dashboard/Service/app.Notification.Service';

@Component({
  selector: 'app-coordinator-dashboard',
  templateUrl: './coordinator-dashboard.component.html',
  styleUrls: ['./coordinator-dashboard.component.scss']
})
export class CoordinatorDashboardComponent implements OnInit {
  private _AdashboardService;

  coordinatorDashboard: CoordinatorDashboard = new CoordinatorDashboard();
  title = 'All CoordinatorDashboard';
  private _notificationService;
  notificationModel: NotificationModel = new NotificationModel();
    output: any;
  errorMessage: any;

  dataSource: any;
  constructor(private _Route: Router, private annoucementSerice: CDashboard,
    private notificationService: NotificationService) {
    this._AdashboardService = annoucementSerice;
    this._notificationService= notificationService;
  }

  ngOnInit(): void {


  this._AdashboardService.CoordinatorDashboard().subscribe(
      allprogram => {
          this.coordinatorDashboard = allprogram;

      },
      error => this.errorMessage = <any>error
  );
  this._notificationService.NotficationDashboard().subscribe(
    allStudents => {
        this.notificationModel = allStudents

    },
    error => this.errorMessage = <any>error
);
  }




  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }

