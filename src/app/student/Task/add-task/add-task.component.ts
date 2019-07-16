import { Component, OnInit } from '@angular/core';
import { TaskViewModel } from '../Model/app.TaskViewModel';
import { CourseListViewModel } from '../../epic/Model/app.CourseList';
import { Router } from '@angular/router';
import { TaskService } from '../Service/app.Task.Service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  private _taskService;

  taskModel: TaskViewModel = new TaskViewModel();
  courseListViewModel: CourseListViewModel[] ;
  title = 'Manage Epic';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private taskService: TaskService)
  {
    this._taskService = taskService;
   }

   ngOnInit(): void {
    this._taskService.StudentRCourses().subscribe(
      allCourses => {
          this.courseListViewModel = allCourses
          console.log(this.courseListViewModel);

      },
      error => this.errorMessage = <any>error
  );

      }
      navigateTo(value){
        console.log(value);
        this._Route.navigate(['Student/Task/Edit', value]);

      }
      onSubmit() {


        this._taskService.AddTask(this.taskModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Task Already exist',
                showConfirmButton: false,
                timer: 1500
              })
            }
            else if (this.output.StatusCode == "200") {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Task Addeed',
                showConfirmButton: false,
                timer: 1500
              })
                this._Route.navigate(['Student/Task']);
            }
            else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Task Not Addeed',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    }

}
