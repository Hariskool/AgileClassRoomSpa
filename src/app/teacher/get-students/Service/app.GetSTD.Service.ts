import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { RegisteredStudent } from '../Model/app.RegisteredStudent';
import { catchError, tap } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
@Injectable({
    providedIn: 'root'
})

export class RegisteredStudentService {

  private data: any;
  private apiUrl = environment.apiEndpoint + "/api/GetEnrolledStudents/";
  token: any;
  username: any;

  constructor(private http: HttpClient) {
      this.data = JSON.parse(localStorage.getItem('TeacherUser'));
      this.token = this.data.token;
  }
  public GetAllStudents() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<RegisteredStudent[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
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
