import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../Model/app.TeacherModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.scss']
})
export class EditteacherComponent implements OnInit {
  private _teacherService;
  errorMessage: any;
  teacherModel: TeacherModel = new TeacherModel();
  title = 'Edit Teacher';
    output: any;
    TeacherID: any;
  constructor(private _Route: Router,
    private teacherService: TeacherModel,
    private _routeParams: ActivatedRoute
   )  {
this._teacherService = teacherService;

   }

   ngOnInit(): void {

    this.TeacherID = this._routeParams.snapshot.params['TeacherId'];

    this._teacherService.GetTeacherById(this.TeacherID).subscribe(
      teacher => {
          this.teacherModel = teacher;

      },
      error => this.errorMessage = <any>error
  );


      }
      onSubmit() {


        this._teacherService.UpdateTeacher(this.teacherModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Teacher Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Teacher Saved Successfully');
                this._Route.navigate(['/Student/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
