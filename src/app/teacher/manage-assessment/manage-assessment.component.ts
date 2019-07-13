import { Component, OnInit, ViewChild } from '@angular/core';
import { AssessmentModel } from './Model/app.AssessmentModel';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AssessmentService } from './Service/app.assessment.Service';

@Component({
  selector: 'app-manage-assessment',
  templateUrl: './manage-assessment.component.html',
  styleUrls: ['./manage-assessment.component.scss']
})
export class ManageAssessmentComponent implements OnInit {
  private _assessmentService;

  assessmentModel: AssessmentModel = new AssessmentModel();
  title = 'All Assessment';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['AssessmentName', 'TotalMarks',
   'Action'];
  dataSource: any;
  constructor(private _Route: Router, private assessmentService: AssessmentService) {
    this._assessmentService = assessmentService;
}

ngOnInit(): void {


  this._assessmentService.GetAllAssessments().subscribe(
      allprogram => {
          this.assessmentModel = allprogram,
          this.dataSource = new MatTableDataSource(allprogram);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
  );
}


Delete(ProgramID) {
  if (confirm("Are you sure to delete Assessment ?")) {
      this._assessmentService.DeleteAssessment(ProgramID).subscribe
          (
          response => {
              if (response.StatusCode == "200") {
                  alert('Deleted Assessment Successfully');
                  location.reload();
              }
              else {
                  alert('Something Went Wrong');
                  this._Route.navigate(['Teacher/Assessment']);
              }
          }
          )
  }
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
