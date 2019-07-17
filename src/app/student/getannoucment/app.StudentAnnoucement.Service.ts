import { SectionModel } from './../../coordinator/manage-section/Models/app.SectionModel';
import { environment } from './../../../environments/environment';
import { AnnoucementModel } from './../../teacher/manage-annoucement/Model/app.AnnouceModel';


import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { environment } from 'src/app/Shared/environment';

import { CourseModel } from '../../coordinator/manage-course/Models/app.CourseModel';


@Injectable({
    providedIn: 'root'
})
export class StudentAnnoucementService {

  private data: any;
  private apiUrl = environment.apiEndpoint +"/api/GetAnnoucement/";
  private editApiUrl = environment.apiEndpoint +"/api/AssiProjInfo/";
  token: any;
  username: any;

constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('StudentUser'));
        this.token = this.data.token;
    }

    public TeacherCourses() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<CourseModel[]>(this.editApiUrl+ '/TeacherCourses' , { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }

    // public TeacherSections(courseId: number): Observable<SectionModel[]>
    // {
    //   return this.http.get<SectionModel[]>(this.editApiUrl + '/TeacherSections?courseId=' + courseId);
    // }
    public TeacherSections(courseId: number) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<SectionModel[]>(this.editApiUrl + '/TeacherSections?courseId=' + courseId, { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }

 public AddAnnoucement(projectModel: AnnoucementModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, projectModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    // Get All Project
        public GetAllAnnoucements() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<AnnoucementModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }


    // Get All Project By ID
    public GetAnnoucementById(ProjectId) {
        var editUrl = this.apiUrl + '/' + ProjectId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<AnnoucementModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update Project
    public UpdateAnnoucement(projectModel: AnnoucementModel) {
        var putUrl = this.apiUrl + '/' + projectModel.annoucementId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, projectModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public DeleteProject(ProjectId) {
        var deleteUrl = this.apiUrl + '/' + ProjectId;
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
