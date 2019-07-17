import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramViewModel } from '../../../admin/manage-program/Models/app.ProgramViewModel';
import { CourseModel } from '../Models/app.CourseModel';
import { CourseService } from '../Services/app.course.Service';
import Swal from 'sweetalert2';
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
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Course Already exist',
                showConfirmButton: false,
                timer: 1500
              })
            }
            else if (this.output.StatusCode == "200") {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Course Added',
                showConfirmButton: false,
                timer: 1500
              })
                this._Route.navigate(['Coordinator/Course']);
            }
            else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    }

}
