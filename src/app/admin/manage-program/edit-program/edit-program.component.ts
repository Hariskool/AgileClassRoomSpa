import { CoordinatorService } from './../../manage-coordinator/Services/app.Coodinator.Service';
import { ProgramService } from './../Services/app.Program.Service';
import { ProgramViewModel } from './../Models/app.ProgramViewModel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { CoordinatorViewModel } from '../../manage-coordinator/Model/app.CoordinatorViewModel';

@Component({
  selector: 'app-edit-program',
  templateUrl: './edit-program.component.html',
  styleUrls: ['./edit-program.component.scss']
})
export class EditProgramComponent implements OnInit {
  departmentId: number;

  private _coordinatorService;
  private _programService;
  programViewModel: ProgramViewModel = new ProgramViewModel();
  errorMessage: any;
  output: any;
  CoordinatorList: CoordinatorViewModel[];
  constructor(private _Route: Router, private _routeParams: ActivatedRoute, programService: ProgramService
    ,private coordinatorService: CoordinatorService) {
      this._programService = programService;
      this._coordinatorService = coordinatorService;
  }


  ngOnInit(): void {
    this._coordinatorService.GetAllCoordinators().subscribe(
      allCoordinator => {
          this.CoordinatorList = allCoordinator;
      },
      error => this.errorMessage = <any>error
  );
      this.departmentId = this._routeParams.snapshot.params['ProgramID'];
           console.log('this---' + this.departmentId);
      // GetRoleById
      this._programService.GetProgramID(this.departmentId).subscribe(
          allPeriod => {
              this.programViewModel = allPeriod

          },
          error => this.errorMessage = <any>error);
  }



  onSubmit()
  {


      this._programService.UpdateProgram(this.programViewModel).subscribe(
          response => {
          this.output = response
          if (this.output.StatusCode == "409") {
            Swal.fire({
              position: 'center',
              type: 'error',
              title: 'Program Already exist',
              showConfirmButton: false,
              timer: 1500
            })
          }
          else if (this.output.StatusCode == "200") {
            Swal.fire({
              position: 'center',
              type: 'success',
              title: 'Program Editted',
              showConfirmButton: false,
              timer: 1500
            })
              this._Route.navigate(['Admin/Program']);
          }
          else {
            Swal.fire({
              position: 'center',
              type: 'error',
              title: 'Program Not Editted',
              showConfirmButton: false,
              timer: 1500
            })
          }
      });
  }

}

