import { StudentModel } from './../Model/app.StudentModel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../Services/app.Student.Service';

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

    this.StudentID = this._routeParams.snapshot.params['StudentId'];

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
