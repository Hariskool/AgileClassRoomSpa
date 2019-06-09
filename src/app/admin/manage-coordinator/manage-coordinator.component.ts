import { CoordinatorViewModel } from './Model/app.CoordinatorViewModel';
import { DepartmentService } from './../department/Services/app.department.Service';
import { CoordinatorService } from './Services/app.Coodinator.Service';
import { DepartmentModel } from './../department/Models/app.DepartmentModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-coordinator',
  templateUrl: './manage-coordinator.component.html',
  styleUrls: ['./manage-coordinator.component.scss']
})
export class ManageCoordinatorComponent implements OnInit {
  private _departmentService;
  private _coordinatorService;
  DepartmentList: DepartmentModel[];
  errorMessage: any;
  coordinaorModel: CoordinatorViewModel = new CoordinatorViewModel();
  title = 'Add Coordinator';
    output: any;
  constructor(private _Route: Router,
    private departmentService: DepartmentService,
    private coordinatorService: CoordinatorService,
   )  {
this._coordinatorService = coordinatorService;
this._departmentService = departmentService;
   }

   ngOnInit(): void {
    this.departmentService.GetAllDepartment().subscribe(
        allDepartment => {
            this.DepartmentList = allDepartment
        },
        error => this.errorMessage = <any>error
    );
      }
      onSubmit() {


        this._coordinatorService.SaveCoordinator(this.coordinaorModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Coordinator Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Coordinator Saved Successfully');
                this._Route.navigate(['/Plan/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
