import {SectionModel} from '../Models/app.SectionModel';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { environment } from 'src/app/Shared/environment';
import {environment} from '../../../../environments/environment';
import {CourseModel} from '../../manage-course/Models/app.CourseModel';
import {TeacherModel} from '../../manage-teacher/Model/app.TeacherModel';
@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private data: any;
  private apiUrl = environment.apiEndpoint +'/api/ManageSection/';
  private apiUrlCourse = environment.apiEndpoint +'/api/GetCourses/';
  private apiUrlTeacher = environment.apiEndpoint + '/api/GetTeachers';
  token: any;
  username: any;

  constructor(private http: HttpClient) {
    this.data = JSON.parse(localStorage.getItem('CoordinatorUser'));
    this.token = this.data.token;
  }


  public AddSection(sectionModel: SectionModel) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.post<any>(this.apiUrl, sectionModel, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get All Courses
  public GetAllSections() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<SectionModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public GetAllCourseCoordinator() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<CourseModel[]>(this.apiUrlCourse, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public GetAllTeachersCoordinator() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<TeacherModel[]>(this.apiUrlTeacher, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Get All Section By ID
  public GetSectionById(SectionId) {
    var editUrl = this.apiUrl + '/' + SectionId;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<SectionModel>(editUrl, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Update Section
  public UpdateSection(sectionModel: SectionModel) {
    var putUrl = this.apiUrl + '/' + sectionModel.SectionID;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.put<any>(putUrl, sectionModel, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  public DeleteSection(SectionId) {
    var deleteUrl = this.apiUrl + '/' + SectionId;
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
