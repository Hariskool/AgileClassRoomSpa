import { StudentModel } from './../Model/app.StudentModel';
import { StudentService } from './../Services/app.Student.Service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  private _studentService;
  errorMessage: any;
  studentModel: StudentModel = new StudentModel();
  title = 'Add Student';
    output: any;
  constructor(private _Route: Router,
    private studentService: StudentService,
   )  {
this._studentService = studentService;
   }

   ngOnInit(): void {

      }
      onSubmit() {


        this._studentService.SaveStudent(this.studentModel).subscribe(
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
