import { StudentModel } from './../Model/app.StudentModel';
import { StudentService } from './../Services/app.Student.Service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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
                alert('Student Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Student Saved Successfully');
                this._Route.navigate(['/Student/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
