import { GroupMemeberViewModel } from './../Model/app.GroupMemberModel';
import { AssignProjectService } from './../../manage-assignproject/Service/app.AssignProject.Service';
import { GroupService } from './../Service/app.Group.Service';
import { GroupModel } from './../Model/app.GroupModel';
import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../coordinator/manage-course/Models/app.CourseModel';
import { SectionModel } from '../../../coordinator/manage-section/Models/app.SectionModel';
import { ProjectViewModel } from '../../manage-project/Models/app.ProjectModel';
import { StudentModel } from '../../../coordinator/manage-student/Model/app.StudentModel';
import { Router } from '@angular/router';
import { ProjectService } from '../../manage-project/Service/app.Project.Service';
import { RegisteredStudentService } from '../../get-students/Service/app.GetSTD.Service';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.scss']
})
export class AddgroupComponent implements OnInit {
  private _projectService;
  private _assignProjectService;
  private _groupService;
  private _registeredService;

  CourseList: CourseModel[];
  SectionList: SectionModel[];
  ProjectList: ProjectViewModel[];
  StudentList: StudentModel[];
  groupModel: GroupModel = new GroupModel();
  groupMemeberViewModel: GroupMemeberViewModel = new GroupMemeberViewModel();
  title = 'Add Group';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private groupService: GroupService
  , private projectService: ProjectService, private assignProjectService: AssignProjectService
  ,private registerService: RegisteredStudentService )
  {
    this._projectService = projectService;
    this._assignProjectService = assignProjectService;
    this._groupService = groupService;
    this._registeredService = registerService;
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
  this._registeredService.GetAllStudents().subscribe(
    allProject => {
        this.StudentList = allProject;
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

  //this.groupModel.groupMembers = this.groupMemeberViewModel;

        this._groupService.AddGroup(this.groupModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Group Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Group Saved Successfully');
                this._Route.navigate(['Teacher/Group']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}

