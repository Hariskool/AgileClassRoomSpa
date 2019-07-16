import { Component, OnInit } from '@angular/core';
import { CourseListViewModel } from '../../epic/Model/app.CourseList';
import { TaskViewModel } from '../Model/app.TaskViewModel';
import { ProjectViewList } from '../../epic/Model/app.ProjectList';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../Service/app.Task.Service';
import { EpicModel } from '../../epic/Model/app.EpicModel';
import { EpicService } from '../../epic/Service/app.epic.Service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  private _taskService;
  private _epicService;

  courseViewList: CourseListViewModel[];
  taskModel: TaskViewModel = new TaskViewModel();
  taskEditModel: TaskViewModel = new TaskViewModel();
  taskModelList: TaskViewModel[];
ProjectViewList: ProjectViewList[];
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
    this._taskService.GetTaskByGroupId(this.groupId).subscribe(
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

    this._taskService.GetProjectList().subscribe(
        allDepartment => {
            this.ProjectViewList = allDepartment
        },
        error => this.errorMessage = <any>error
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
