import { EpicService } from './../../epic/Service/app.epic.Service';
import { EpicModel } from './../../epic/Model/app.EpicModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CourseListViewModel } from './../../epic/Model/app.CourseList';
import { TaskViewModel } from './../../Task/Model/app.TaskViewModel';
import { TaskService } from './../../Task/Service/app.Task.Service';

import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-active-sprint',
  templateUrl: './active-sprint.component.html',
  styleUrls: ['./active-sprint.component.scss']
})
export class ActiveSprintComponent implements OnInit {
  private _taskService;
  private _epicService;

  courseViewList: CourseListViewModel[];
  taskModel: TaskViewModel = new TaskViewModel();
  taskEditModel: TaskViewModel = new TaskViewModel();
  taskUpdateModel: TaskViewModel = new TaskViewModel();
  taskModelList: TaskViewModel[];

epicList: EpicModel[];
  errorMessage: any;

  title = 'Add Task';
    output: any;
    groupId: any;
  constructor(private _Route: Router,
    private taskService: TaskService,
    private epicService: EpicService,
    private _routeParams: ActivatedRoute
   )  {

this._taskService = taskService;
this._epicService = epicService;
   }

   ngOnInit(): void {

    this.groupId = this._routeParams.snapshot.params['groupId'];
console.log(this.groupId);
    this._taskService.GetTaskByGroupId(3).subscribe(
      coordinator => {
          this.taskModelList = coordinator

      },
      error => this.errorMessage = <any>error
  );
  this._epicService.GetEpicByGroupId(this.groupId).subscribe(
    coordinator => {
        this.epicList = coordinator

    },
    error => this.errorMessage = <any>error
);


      }
      TodoTask(taskId){

        this._taskService.GetTaskById(taskId).subscribe(
          allDepartment => {
              this.taskEditModel = allDepartment ;

          },
          error => this.errorMessage = <any>error
      );
      console.log(this.taskEditModel.taskId);

      this._taskService.TodoTask(this.taskEditModel).subscribe(
        response => {
        this.output = response
        location.reload();
      }
      );
    }
      DoneTask(taskId){

        this._taskService.GetTaskById(taskId).subscribe(
          allDepartment => {
              this.taskEditModel = allDepartment
          },
          error => this.errorMessage = <any>error
      );
      this._taskService.DoneTask(this.taskEditModel).subscribe(
        response => {
        this.output = response
        location.reload();
      }
      );
      }

      ProgressTask(taskId){

        this._taskService.GetTaskById(taskId).subscribe(
          allDepartment => {
              this.taskEditModel = allDepartment
          },
          error => this.errorMessage = <any>error
      );
      this._taskService.InProgressTask(this.taskEditModel).subscribe(
        response => {
        this.output = response
        location.reload();
      }
      );
      }

      EditTask(epicId){
        this._taskService.GetTaskById(epicId).subscribe(
          coordinator => {
              this.taskEditModel = coordinator

          },
          error => this.errorMessage = <any>error
      );

      }
      onEditSubmit(){
        this.taskEditModel.groupId = this.groupId;
        this._taskService.UpdateTask(this.taskEditModel).subscribe(
          response => {
          this.output = response
          if (this.output.StatusCode == "409") {
              alert('Task Already Exists');
          }
          else if (this.output.StatusCode == "200") {
              alert('Task Saved Successfully');
              this._Route.navigate(['/Student/Task']);
          }
          else {
              alert('Something Went Wrong');
          }
      });
      }
      onSubmit() {

this.taskModel.groupId = this.groupId;
        this._taskService.AddTask(this.taskModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Task Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Task Saved Successfully');
                this._Route.navigate(['/Student/Task']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}
