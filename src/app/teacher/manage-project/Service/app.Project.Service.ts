import { ProjectViewModel } from './../Models/app.ProjectModel';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { environment } from 'src/app/Shared/environment';
import {environment} from '../../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ProjectService {

  private data: any;
  private apiUrl = environment.apiEndpoint +"/api/ManageProject/";
  token: any;
  username: any;

constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('TeacherUser'));
        this.token = this.data.token;
    }


 public AddProject(projectModel: ProjectViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, projectModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    // Get All Project
        public GetAllProjects() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<ProjectViewModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }


    // Get All Project By ID
    public GetProjectById(ProjectId) {
        var editUrl = this.apiUrl + '/' + ProjectId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<ProjectViewModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update Project
    public UpdateProject(projectModel: ProjectViewModel) {
        var putUrl = this.apiUrl + '/' + projectModel.projectId;
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
