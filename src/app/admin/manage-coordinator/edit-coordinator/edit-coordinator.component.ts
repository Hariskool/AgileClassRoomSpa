import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../../department/Models/app.DepartmentModel';
import { CoordinatorViewModel } from '../Model/app.CoordinatorViewModel';
import { DepartmentService } from '../../department/Services/app.department.Service';
import { Router, ActivatedRoute } from '@angular/router';
import { CoordinatorService } from '../Services/app.Coodinator.Service';

@Component({
  selector: 'app-edit-coordinator',
  templateUrl: './edit-coordinator.component.html',
  styleUrls: ['./edit-coordinator.component.scss']
})
export class EditCoordinatorComponent implements OnInit {
  private _departmentService;
  private _coordinatorService;
  DepartmentList: DepartmentModel[];
  errorMessage: any;
  coordinaorModel: CoordinatorViewModel = new CoordinatorViewModel();
  title = 'Add Coordinator';
    output: any;
    CoordinatorID: any;
  constructor(private _Route: Router,
    private departmentService: DepartmentService,
    private coordinatorService: CoordinatorService,
    private _routeParams: ActivatedRoute
   )  {
this._coordinatorService = coordinatorService;
this._departmentService = departmentService;
   }

   ngOnInit(): void {

    this.CoordinatorID = this._routeParams.snapshot.params['CoordinatorID'];

    this._coordinatorService.GetCoordinatorByCoordinatorID(this.CoordinatorID).subscribe(
      coordinator => {
          this.coordinaorModel = coordinator

      },
      error => this.errorMessage = <any>error
  );

    this.departmentService.GetAllDepartment().subscribe(
        allDepartment => {
            this.DepartmentList = allDepartment
        },
        error => this.errorMessage = <any>error
    );
      }
      onSubmit() {


        this._coordinatorService.UpdateCoordinator(this.coordinaorModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Coordinator Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Coordinator Saved Successfully');
                this._Route.navigate(['/Coordinator/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
