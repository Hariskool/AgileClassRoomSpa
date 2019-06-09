import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StudentModel } from '../Model/app.StudentModel';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class StudentService{

    private data: any;
      private apiUrl = environment.apiEndpoint + "/api/ManageStudent/";
      token: any;
      username: any;

      constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('CoordinatorUser'));
        this.token = this.data.token;
      }
      public SaveStudent(stundetViewModel: StudentModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, stundetViewModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );

    }
    public GetAllStudents() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<StudentModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }
  public GetStudentByCoordinatorID(coordinatorId) {
    var editurl = this.apiUrl + coordinatorId;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<StudentModel[]>(editurl, { headers: headers }).pipe(tap(data => data),
        catchError(this.handleError)
    );
  }
  public UpdateStudent(studentViewModel: StudentModel) {
    var updateurl = this.apiUrl + studentViewModel.StudentId;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.put<any>(updateurl, studentViewModel, { headers: headers })
        .pipe(
            catchError(this.handleError)
        );
  }
  public DelteStudent(StudentId) {
    var deleteUrl = this.apiUrl + '/' + StudentId;
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


