import { AssessmentService } from './../../manage-assessment/Service/app.assessment.Service';
import { ProjectViewModel } from './../Models/app.ProjectModel';
import { AssessmentModel } from './../../manage-assessment/Model/app.AssessmentModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../Service/app.Project.Service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit  {
  private _projectService;
  private _assessmentService;
  AssesmentList: AssessmentModel[];
  projectModel: ProjectViewModel = new ProjectViewModel();
  title = 'Add Project';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private projectService: ProjectService,
    assessmentService: AssessmentService)
  {
    this._projectService = projectService;
    this._assessmentService = assessmentService;
   }

   ngOnInit(): void {
    this._assessmentService.GetAllAssessments().subscribe(
        allProgram => {
            this.AssesmentList = allProgram;
        },
        error => this.errorMessage = <any>error
    );
      }
      onSubmit() {


        this._projectService.AddProject(this.projectModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Project Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Project Saved Successfully');
                this._Route.navigate(['Teacher/Project']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
