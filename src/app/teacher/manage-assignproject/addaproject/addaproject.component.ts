import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../coordinator/manage-course/Models/app.CourseModel';
import { SectionModel } from '../../../coordinator/manage-section/Models/app.SectionModel';
import { ProjectViewModel } from '../../manage-project/Models/app.ProjectModel';
import { AssignProjectModel } from '../Model/app.AssignProjectModel';
import { Router } from '@angular/router';
import { ProjectService } from '../../manage-project/Service/app.Project.Service';
import { AssignProjectService } from '../Service/app.AssignProject.Service';

@Component({
  selector: 'app-addaproject',
  templateUrl: './addaproject.component.html',
  styleUrls: ['./addaproject.component.scss']
})
export class AddaprojectComponent implements OnInit {
  private _projectService;
  private _assignProjectService;


  CourseList: CourseModel[];
  SectionList: SectionModel[];
  ProjectList: ProjectViewModel[];

  assignProjectModel: AssignProjectModel = new AssignProjectModel();
  title = 'Add AssignProject';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private assignProjectService: AssignProjectService
  , private projectService: ProjectService )
  {
    this._projectService = projectService;
    this._assignProjectService = assignProjectService;
   }

   ngOnInit(): void {
    this._assignProjectService.TeacherCourses().subscribe(
        allCourse => {
            this.CourseList = allCourse;
        },
        error => this.errorMessage = <any>error
    );
    this._projectService.GetAllProjects().subscribe(
      allProject => {
          this.ProjectList = allProject;
      },
      error => this.errorMessage = <any>error
  );

      }

      BindSection(courseId: number){
        //this._assignProjectService.TeacherSections(courseId);
        this._assignProjectService.TeacherSections(courseId).subscribe(
          allCourse => {
              this.SectionList = allCourse;
          },
          error => this.errorMessage = <any>error
      );
      }
      onSubmit() {


        this._assignProjectService.AddAssignProject(this.assignProjectModel).subscribe(
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

