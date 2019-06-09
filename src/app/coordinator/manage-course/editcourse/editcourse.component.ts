import { Component, OnInit } from '@angular/core';
import { ProgramViewModel } from '../../../admin/manage-program/Models/app.ProgramViewModel';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseModel } from '../Models/app.CourseModel';
import { CourseService } from '../Services/app.course.Service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.scss']
})
export class EditcourseComponent implements OnInit {
  private _courseService;
  ProgramList: ProgramViewModel[];
  courseViewModel: CourseModel = new CourseModel();
  title = 'Edit Course';
    output: any;
    errorMessage: any;
    ProgramID: any;
  constructor(private _Route: Router, private courseService: CourseService,
    private _routeParams: ActivatedRoute)
  {
    this._courseService = courseService;
   }

   ngOnInit(): void {

    this.ProgramID = this._routeParams.snapshot.params['ProgramID'];
    this._courseService.GetCourseById(this.ProgramID).subscribe(
        course => {
            this.courseViewModel = course;
        },
        error => this.errorMessage = <any>error
    );
    this._courseService.GetAllProgramCoordinator().subscribe(
      allProgram => {
          this.ProgramList = allProgram;
      },
      error => this.errorMessage = <any>error
  );

      }
      onSubmit() {


        this._courseService.UpdateCourse(this.courseViewModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Course Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Course Saved Successfully');
                this._Route.navigate(['coordinator/course']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
