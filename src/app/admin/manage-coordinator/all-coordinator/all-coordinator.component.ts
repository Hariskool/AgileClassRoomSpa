import { CoordinatorService } from './../Services/app.Coodinator.Service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CoordinatorViewModel } from '../Model/app.CoordinatorViewModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-coordinator',
  templateUrl: './all-coordinator.component.html',
  styleUrls: ['./all-coordinator.component.scss']
})
export class AllCoordinatorComponent implements OnInit {
  private _coordinatorService;

  coordinaorModel: CoordinatorViewModel = new CoordinatorViewModel();
  title = 'All Coordinator';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['CoordinatorID', 'CoordinatorUserName',
  'CoordinatorFullName', 'Email', 'Password', 'ContactNo', 'Status', 'DepartmentName', 'Action'];
  dataSource: any;
  constructor(private _Route: Router, private coordinatorService: CoordinatorService) {
      this._coordinatorService = coordinatorService;
  }
  ngOnInit(): void {


      this._coordinatorService.GetAllCoordinators().subscribe(
          allcoordinator => {
              this.coordinaorModel = allcoordinator
              this.dataSource = new MatTableDataSource(allcoordinator);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
          },
          error => this.errorMessage = <any>error
      );
  }


  Delete(CoordinatorID) {
      if (confirm("Are you sure to delete Coordinator ?")) {
          this._coordinatorService.DeleteCoordinator(CoordinatorID).subscribe
              (
              response => {
                  if (response.StatusCode == "200") {
                      alert('Deleted Coordinator Successfully');
                      location.reload();
                  }
                  else {
                      alert('Something Went Wrong');
                      this._Route.navigate(['/Coordinator/All']);
                  }
              }
              )
      }
  }

  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
