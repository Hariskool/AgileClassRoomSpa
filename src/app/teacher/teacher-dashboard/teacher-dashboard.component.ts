import { TeacherDashboard } from './Models/app.TeacherDashboardModel';
import { TDashboard } from './Service/app.Teacher.Service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CoordinatorDashboard } from '../../coordinator/coordinator-dashboard/Model/app.CoordinatorDashboardMode';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {
  private _AdashboardService;

  coordinatorDashboard: TeacherDashboard = new TeacherDashboard();
  title = 'All CoordinatorDashboard';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sectionNO', 'CourseName', 'Description', 'EndDate',
   'Action'];
  dataSource: any;
  constructor(private _Route: Router, private annoucementSerice: TDashboard) {
    this._AdashboardService = annoucementSerice;
  }

  ngOnInit(): void {


  this._AdashboardService.TeacherDashboard().subscribe(
      allprogram => {
          this.coordinatorDashboard = allprogram;

      },
      error => this.errorMessage = <any>error
  );
  }




  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }

