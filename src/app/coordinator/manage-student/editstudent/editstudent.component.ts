import { StudentModel } from './../Model/app.StudentModel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../Services/app.Student.Service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {
  private __studentService;
  errorMessage: any;
  studentModel: StudentModel = new StudentModel();
  title = 'Edit Student';
    output: any;
    StudentID: any;
  constructor(private _Route: Router,
    private studentService: StudentService,
    private _routeParams: ActivatedRoute
   )  {
this.__studentService = studentService;

   }

   ngOnInit(): void {

    this.StudentID = this._routeParams.snapshot.params['StudentID'];

    this.__studentService.GetStudentById(this.StudentID).subscribe(
      student => {
          this.studentModel = student;

      },
      error => this.errorMessage = <any>error
  );


      }
      onSubmit() {


        this.__studentService.UpdateStudent(this.studentModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: ' Already',
                showConfirmButton: false,
                timer: 1500
              })
            }
            else if (this.output.StatusCode == "200") {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: ' Added',
                showConfirmButton: false,
                timer: 1500
              })
                this._Route.navigate(['/Coordinator/Student']);
            }
            else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: ' Error',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    }

}
