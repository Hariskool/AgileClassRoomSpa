import { ProjectViewModel } from './Models/app.ProjectModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProjectService } from './Service/app.Project.Service';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.scss']
})
export class ManageProjectComponent implements OnInit {
private _projectService;

projectModel: ProjectViewModel = new ProjectViewModel();
title = 'All Projects';
  output: any;
errorMessage: any;
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
displayedColumns: string[] = ['ProjectName', 'description', 'status', 'EndDate',
'Assessment', 'Action'];
dataSource: any;
constructor(private _Route: Router, private projectService: ProjectService) {
  this._projectService = projectService;
}

ngOnInit(): void {


this._projectService.GetAllProjects().subscribe(
    allprogram => {
        this.projectModel = allprogram,
        this.dataSource = new MatTableDataSource(allprogram);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    },
    error => this.errorMessage = <any>error
);
}


Delete(ProgramID) {
if (confirm("Are you sure to delete Project ?")) {
    this._projectService.DeleteProject(ProgramID).subscribe
        (
        response => {
            if (response.StatusCode == "200") {
                alert('Deleted Project Successfully');
                location.reload();
            }
            else {
                alert('Something Went Wrong');
                this._Route.navigate(['Teacher/Project']);
            }
        }
        )
}
}

applyFilter(filterValue: string) {
this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
