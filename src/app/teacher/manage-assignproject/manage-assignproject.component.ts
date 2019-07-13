import { AssignProjectService } from './Service/app.AssignProject.Service';
import { AssignProjectModel } from './Model/app.AssignProjectModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-assignproject',
  templateUrl: './manage-assignproject.component.html',
  styleUrls: ['./manage-assignproject.component.scss']
})
export class ManageAssignprojectComponent implements OnInit {
  private _assignProjectService;
  assignProjectModel: AssignProjectModel = new AssignProjectModel();
  title = 'All AssignProject';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['CourseName', 'SectionNo',
  'ProjectName',  'Action'];
  dataSource: any;
  constructor(private _Route: Router,
    private assignProjectService: AssignProjectService,
   )  {
       this._assignProjectService = assignProjectService;

   }

   ngOnInit(): void {


    this._assignProjectService.GetAllAssignProjects().subscribe(
        allCourses => {
            this.assignProjectModel = allCourses
            this.dataSource = new MatTableDataSource(allCourses);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        },
        error => this.errorMessage = <any>error
    );
}


Delete(CourseID) {
    if (confirm("Are you sure to delete AssignProject ?")) {
        this._assignProjectService.DeleteAssignProject(CourseID).subscribe
            (
            response => {
                if (response.StatusCode == "200") {
                    alert('Deleted AssignProject Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    this._Route.navigate(['/Course']);
                }
            }
            )
    }
}

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}

