import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../Model/app.TeacherModel';
import { Router } from '@angular/router';
import { TeacherService } from '../Service/app.Teacher.Service';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.scss']
})
export class AddteacherComponent implements OnInit {

  private _teacherService;
  errorMessage: any;
  teacherModel: TeacherModel = new TeacherModel();
  title = 'Add Teacher';
    output: any;
  constructor(private _Route: Router,
    private teacherService: TeacherService,
   )  {
this._teacherService = teacherService;
   }

   ngOnInit(): void {

      }
      onSubmit() {


        this._teacherService.SaveTeacher(this.teacherModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Teacher Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Teacher Saved Successfully');
                this._Route.navigate(['/Teacher/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
