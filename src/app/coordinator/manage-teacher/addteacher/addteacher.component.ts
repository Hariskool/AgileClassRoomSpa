import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../Model/app.TeacherModel';
import { Router } from '@angular/router';
import { TeacherService } from '../Service/app.Teacher.Service';
import Swal from 'sweetalert2';

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
                this._Route.navigate(['Coordinator/Teacher']);
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
