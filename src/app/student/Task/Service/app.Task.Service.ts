import { CourseListViewModel } from './../../epic/Model/app.CourseList';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { environment } from 'src/app/Shared/environment';
import {environment} from '../../../../environments/environment';
import { TaskViewModel } from '../Model/app.TaskViewModel';
@Injectable({
    providedIn: 'root'
})
export class TaskService {

  private data: any;
  private apiUrl = environment.apiEndpoint +"/api/ManageTask/";
  private apiUrlDone = environment.apiEndpoint +"/api/DoneTask/";
  private apiUrlProgress = environment.apiEndpoint +"/api/InProgress/";
  private apiUrlTodo = environment.apiEndpoint +"/api/TodoTask/";
  token: any;
  username: any;

constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('StudentUser'));
        this.token = this.data.token;
    }


 public AddTask(taskModel: TaskViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, taskModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }
    public StudentRCourses() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<CourseListViewModel[]>(this.apiUrl+ '/StudentRCourses', { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }
    // Get All Epics
    public GetAllTasks() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<TaskViewModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    public GetTaskByGroupId(GetEpicByGroupId) {
      console.log(GetEpicByGroupId);
      var editUrl = this.apiUrl + '/TaskByGroup?epicId=' + GetEpicByGroupId;
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<TaskViewModel[]>(editUrl, { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }
    // Get All Role By ID
    public GetTaskById(EpicId) {
        var editUrl = this.apiUrl + '/' + EpicId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<TaskViewModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update Role
    public UpdateTask(taskmodel: TaskViewModel) {
        var putUrl = this.apiUrl + '/' + taskmodel.taskId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, taskmodel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }
    public TodoTask(taskmodel: TaskViewModel) {
      var putUrl = this.apiUrlTodo + '/' + taskmodel.taskId;
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.put<any>(putUrl, taskmodel, { headers: headers })
          .pipe(
              catchError(this.handleError)
          );
  }

  public InProgressTask(taskmodel: TaskViewModel) {

    var putUrl = this.apiUrlProgress + '/' + taskmodel.taskId;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.put<any>(putUrl, taskmodel, { headers: headers })
        .pipe(
            catchError(this.handleError)
        );
}

public DoneTask(taskmodel: TaskViewModel) {
  var putUrl = this.apiUrlDone + '/' + taskmodel.taskId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, taskmodel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }


    public DeleteTask(EpicID) {
        var deleteUrl = this.apiUrl + '/' + EpicID;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.delete<any>(deleteUrl, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };
}
