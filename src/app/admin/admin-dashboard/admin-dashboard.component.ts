import { NotificationService } from './Service/app.Notification.Service';
import { ADashboard } from './Service/app.aDashboard';
import { AdminDashboard } from './Models/app.AdminDashBoard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { NotificationModel } from './Models/app.NotificationModel';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private _AdashboardService;
  

  adminDashboard: AdminDashboard = new AdminDashboard();
  private _notificationService;
  notificationModel: NotificationModel = new NotificationModel();
  title = 'All AdminDashboard';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sectionNO', 'CourseName', 'Description', 'EndDate',
   'Action'];
  dataSource: any;
  constructor(private _Route: Router, private annoucementSerice: ADashboard
    ,private notificationService: NotificationService) {
    this._AdashboardService = annoucementSerice;
    this._notificationService = notificationService;
  }

  ngOnInit(): void {


  this._AdashboardService.AdminDashboard().subscribe(
      allprogram => {
          this.adminDashboard = allprogram;

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

