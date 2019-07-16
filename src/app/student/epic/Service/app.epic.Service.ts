import { CourseListViewModel } from './../Model/app.CourseList';
import { EpicModel } from './../Model/app.EpicModel';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { environment } from 'src/app/Shared/environment';
import {environment} from '../../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class EpicService {

  private data: any;
  private apiUrl = environment.apiEndpoint +"/api/ManageEpic/";

  token: any;
  username: any;

constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('StudentUser'));
        this.token = this.data.token;
    }


 public AddEpic(epicModel: EpicModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, epicModel, { headers: headers })
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
    public GetAllEpics() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<EpicModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    public GetEpicByGroupId(GetEpicByGroupId) {
      console.log(GetEpicByGroupId);
      var editUrl = this.apiUrl + '/EpicByGroup?epicId=' + GetEpicByGroupId;
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<EpicModel[]>(editUrl, { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }
    // Get All Role By ID
    public GetEpicById(EpicId) {
        var editUrl = this.apiUrl + '/' + EpicId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<EpicModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update Role
    public UpdateEpic(courseModel: EpicModel) {
        var putUrl = this.apiUrl + '/' + courseModel.epicId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, courseModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public DeleteEpic(EpicID) {
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
