import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { EnrolModel } from '../Models/app.EnrolModel';
import {environment} from '../../../../environments/environment';
import { SectionModel } from '../../../../../AgileClassRoomSpa/src/app/coordinator/manage-section/Models/app.SectionModel';
import { StudentModel } from '../../manage-student/Model/app.StudentModel';
@Injectable({
  providedIn: 'root'
})
export class EnrolService {

  private data: any;
  private apiUrl = environment.apiEndpoint + '/api/ManageEnrolment/';
  private apiEnrolInfo = environment.apiEndpoint + '/api/GetEnrolInfo';
  token: any;
  username: any;

  constructor(private http: HttpClient) {
    this.data = JSON.parse(localStorage.getItem('CoordinatorUser'));
    this.token = this.data.token;
  }


  public AddEnrol(enrolmodel: EnrolModel) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.post<any>(this.apiUrl, enrolmodel, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get All Enrol
  public GetAllEnrols() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<EnrolModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public GetAllSectionsEnrols() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<SectionModel[]>(this.apiEnrolInfo + '/SectionDATA', { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public GetAllStudentsEnrols(courseId: number) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    // tslint:disable-next-line:max-line-length
    return this.http.get<StudentModel[]>(this.apiEnrolInfo + '/StudentDATA?CourseID=' +courseId, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Get All Enrol By ID
  public GetEnrolById(EnrolD) {
    var editUrl = this.apiUrl + '/' + EnrolD;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<EnrolModel>(editUrl, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Update Enrol
  public UpdateEnrol(enrolModel: EnrolModel) {
    var putUrl = this.apiUrl + '/' + enrolModel.EnrolmentID;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.put<any>(putUrl, enrolModel, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  public DeleteEnrol(EnrolID) {
    var deleteUrl = this.apiUrl + '/' + EnrolID;
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
