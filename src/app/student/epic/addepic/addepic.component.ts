import { EpicService } from './../Service/app.epic.Service';

import { EpicModel } from './../Model/app.EpicModel';

import { Component, OnInit } from '@angular/core';
import { CourseListViewModel } from '../Model/app.CourseList';
import { ProjectViewList } from '../Model/app.ProjectList';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addepic',
  templateUrl: './addepic.component.html',
  styleUrls: ['./addepic.component.scss']
})
export class AddepicComponent implements OnInit {
  private _epicService;

  courseViewList: CourseListViewModel[];
  epicModel: EpicModel = new EpicModel();
  epicEditModel: EpicModel = new EpicModel();
  epicModelList: EpicModel[];
ProjectViewList: ProjectViewList[];
  errorMessage: any;

  title = 'Add Epic';
    output: any;
    groupId: any;
  constructor(private _Route: Router,
    private epicService: EpicService,

    private _routeParams: ActivatedRoute
   )  {

this._epicService = epicService;
   }

   ngOnInit(): void {

    this.groupId = this._routeParams.snapshot.params['groupId'];
console.log(this.groupId);
    this._epicService.GetEpicByGroupId(this.groupId).subscribe(
      coordinator => {
          this.epicModelList = coordinator

      },
      error => this.errorMessage = <any>error
  );

    this._epicService.GetProjectList().subscribe(
        allDepartment => {
            this.ProjectViewList = allDepartment
        },
        error => this.errorMessage = <any>error
    );
      }
      EditEpic(epicId){
        this._epicService.GetEpicById(epicId).subscribe(
          coordinator => {
              this.epicEditModel = coordinator

          },
          error => this.errorMessage = <any>error
      );

      }
      onEditSubmit(){
        this.epicEditModel.groupId = this.groupId;
        this._epicService.UpdateEpic(this.epicEditModel).subscribe(
          response => {
          this.output = response
          if (this.output.StatusCode == "409") {
              alert('Epic Already Exists');
          }
          else if (this.output.StatusCode == "200") {
              alert('Epic Saved Successfully');
              this._Route.navigate(['/Student/Epic']);
          }
          else {
              alert('Something Went Wrong');
          }
      });
      }
      onSubmit() {

this.epicModel.groupId = this.groupId;
        this._epicService.AddEpic(this.epicModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Epic Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Epic Saved Successfully');
                this._Route.navigate(['/Student/Epic']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
