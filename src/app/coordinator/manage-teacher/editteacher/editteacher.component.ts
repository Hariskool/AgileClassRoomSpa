import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../Model/app.TeacherModel';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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

    this.TeacherID = this._routeParams.snapshot.params['TeacherID'];

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
