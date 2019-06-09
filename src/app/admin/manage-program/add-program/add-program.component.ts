import { CoordinatorViewModel } from './../../manage-coordinator/Model/app.CoordinatorViewModel';
import { CoordinatorService } from './../../manage-coordinator/Services/app.Coodinator.Service';
import { ProgramService } from '.././Services/app.Program.Service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramViewModel } from '../Models/app.ProgramViewModel';
@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {
  private _programService;
  private _coordinatorService;
  CoordinatorList: CoordinatorViewModel[];
  errorMessage: any;
  programViewModel: ProgramViewModel = new ProgramViewModel();
  title = 'Add Program';
    output: any;
    constructor(private _Route: Router,
      private programService: ProgramService,
      private coordinatorService: CoordinatorService,
     )  {
  this._coordinatorService = coordinatorService;
  this._programService = programService;
     }
     ngOnInit(): void {
      this._coordinatorService.GetAllCoordinators().subscribe(
          allCoordinator => {
              this.CoordinatorList = allCoordinator;
          },
          error => this.errorMessage = <any>error
      );
        }
        onSubmit() {


          this._programService.SavePrograms(this.programViewModel).subscribe(
              response => {
              this.output = response
              if (this.output.StatusCode == "409") {
                  alert('Program Already Exists');
              }
              else if (this.output.StatusCode == "200") {
                  alert('Program Saved Successfully');
                  this._Route.navigate(['admin/program/All']);
              }
              else {
                  alert('Something Went Wrong');
              }
          });
      }

}
