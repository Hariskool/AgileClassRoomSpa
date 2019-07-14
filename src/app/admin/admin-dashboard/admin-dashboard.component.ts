import { ADashboard } from './Service/app.aDashboard';
import { AdminDashboard } from './Models/app.AdminDashBoard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private _AdashboardService;

  adminDashboard: AdminDashboard = new AdminDashboard();
  title = 'All AdminDashboard';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sectionNO', 'CourseName', 'Description', 'EndDate',
   'Action'];
  dataSource: any;
  constructor(private _Route: Router, private annoucementSerice: ADashboard) {
    this._AdashboardService = annoucementSerice;
  }

  ngOnInit(): void {


  this._AdashboardService.AdminDashboard().subscribe(
      allprogram => {
          this.adminDashboard = allprogram;

      },
      error => this.errorMessage = <any>error
  );
  }




  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }

