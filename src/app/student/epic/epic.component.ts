import { CourseListViewModel } from './Model/app.CourseList';
import { EpicService } from './Service/app.epic.Service';
import { EpicModel } from './Model/app.EpicModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {
  private _epicService;

  epicModel: EpicModel = new EpicModel();
  courseListViewModel: CourseListViewModel[] ;
  title = 'Manage Epic';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private epicService: EpicService)
  {
    this._epicService = epicService;
   }

   ngOnInit(): void {
    this._epicService.StudentRCourses().subscribe(
      allCourses => {
          this.courseListViewModel = allCourses
          console.log(this.courseListViewModel);

      },
      error => this.errorMessage = <any>error
  );

      }
      navigateTo(value){
        console.log(value);
        this._Route.navigate(['Student/Epic/Edit', value]);

      }
      onSubmit() {


        this._epicService.AddEpic(this.epicModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'epic Already exist',
                showConfirmButton: false,
                timer: 1500
              })
            }
            else if (this.output.StatusCode == "200") {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Epic Addeed',
                showConfirmButton: false,
                timer: 1500
              })
                this._Route.navigate(['Student/Epic']);
            }
            else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Epic Not Addeed',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    }

}
