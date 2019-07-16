import { DepartmentService } from './../Services/app.department.Service';
import { RoleService } from './../../role/Services/app.role.Service';
import { DepartmentModel } from './../Models/app.DepartmentModel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  departmentId: number;


  private _departmentService;
  DepartmentModel: DepartmentModel = new DepartmentModel();
  errorMessage: any;
  output: any;

  constructor(private _Route: Router, private _routeParams: ActivatedRoute, departmentService: DepartmentService) {
      this._departmentService = departmentService;
  }


  ngOnInit(): void {
      this.departmentId = this._routeParams.snapshot.params['DepartmentID'];
           console.log('this---' + this.departmentId);
      // GetRoleById
      this._departmentService.GetDepartmentById(this.departmentId).subscribe(
          allPeriod => {
              this.DepartmentModel = allPeriod

          },
          error => this.errorMessage = <any>error);
  }



  onSubmit()
  {


      this._departmentService.UpdateDepartment(this.DepartmentModel).subscribe(
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
              title: 'Department Editted',
              showConfirmButton: false,
              timer: 1500
            })
              this._Route.navigate(['Admin/Department']);
          }
          else {
            Swal.fire({
              position: 'center',
              type: 'error',
              title: 'Department Not Editted',
              showConfirmButton: false,
              timer: 1500
            })
          }
      });
  }

}
