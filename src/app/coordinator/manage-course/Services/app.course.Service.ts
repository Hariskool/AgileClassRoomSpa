import { ProgramViewModel } from './../../../admin/manage-program/Models/app.ProgramViewModel';
import { CourseModel } from './../Models/app.CourseModel';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { environment } from 'src/app/Shared/environment';
import {environment} from '../../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class CourseService {

  private data: any;
  private apiUrl = environment.apiEndpoint +"/api/ManageCourse/";
  private apiUrlProgram = environment.apiEndpoint +"/api/GetProgram/";
  token: any;
  username: any;

constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('CoordinatorUser'));
        this.token = this.data.token;
    }


 public AddCourse(courseModel: CourseModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, courseModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    // Get All Courses
    public GetAllCourses() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<CourseModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }
    public GetAllProgramCoordinator() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<ProgramViewModel[]>(this.apiUrlProgram, { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }

    // Get All Role By ID
    public GetCourseById(CourseID) {
      console.log(CourseID);
        var editUrl = this.apiUrl + '/' + CourseID;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<CourseModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update Role
    public UpdateCourse(courseModel: CourseModel) {
        var putUrl = this.apiUrl + '/' + courseModel.CourseID;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, courseModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public DeleteCourse(CourseID) {
        var deleteUrl = this.apiUrl + '/' + CourseID;
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
