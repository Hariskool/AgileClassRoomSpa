import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramViewModel } from '../../../admin/manage-program/Models/app.ProgramViewModel';
import { CourseModel } from '../Models/app.CourseModel';
import { CourseService } from '../Services/app.course.Service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
  private _courseService;
  ProgramList: ProgramViewModel[];
  courseViewModel: CourseModel = new CourseModel();
  title = 'Add Course';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private courseService: CourseService)
  {
    this._courseService = courseService;
   }

   ngOnInit(): void {
    this._courseService.GetAllProgramCoordinator().subscribe(
        allProgram => {
            this.ProgramList = allProgram;
        },
        error => this.errorMessage = <any>error
    );
      }
      onSubmit() {


        this._courseService.AddCourse(this.courseViewModel).subscribe(
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
