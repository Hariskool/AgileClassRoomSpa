import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { SprintViewModel } from './Model/app.SprintModel';
import { SprintService } from './Service/app.Sprint.Service';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  private _sprintService;
  sprintModel: SprintViewModel = new SprintViewModel();
  title = 'All Sprints';
  output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['CourseName', 'Status',
    'StartDate', 'EndDate', 'Action'];
  dataSource: any;
  constructor(private _Route: Router,
              private sprintService: SprintService,
  )  {
    this._sprintService = sprintService;

  }

  ngOnInit(): void {


    this._sprintService.GetAllSprints().subscribe(
      allSections => {
        this.sprintModel = allSections
        this.dataSource = new MatTableDataSource(allSections);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
    );
  }
  
  AddSprint(sprintId){

  }

  EditSprint(SprintId){


  }

  Delete(SprintId) {
    if (confirm("Are you sure to delete Sprint ?")) {
      this._sprintService.DeleteSprint(SprintId).subscribe
      (
        response => {
          if (response.StatusCode == "200") {
            alert('Deleted Sprint Successfully');
            location.reload();
          }
          else {
            alert('Something Went Wrong');
            this._Route.navigate(['/Student/Sprint']);
          }
        }
      )
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
