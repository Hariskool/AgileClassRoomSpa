import { DepartmentModel } from './../Models/app.DepartmentModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../Services/app.department.Service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  private _departmentService;

  departmentModel: DepartmentModel = new DepartmentModel();
  title = 'Add Department';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private courseService: DepartmentService)
  {
    this._departmentService = courseService;
   }

   ngOnInit(): void {

      }
      onSubmit() {


        this._departmentService.AddDepartment(this.departmentModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Department Already exist',
                showConfirmButton: false,
                timer: 1500
              })
            }
            else if (this.output.StatusCode == "200") {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Department Addeed',
                showConfirmButton: false,
                timer: 1500
              })
                this._Route.navigate(['Admin/Department']);
            }
            else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Department Not Addeed',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    }

}
