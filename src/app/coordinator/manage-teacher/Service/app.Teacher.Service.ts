import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TeacherModel } from '../Model/app.TeacherModel';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class TeacherService{

    private data: any;
      private apiUrl = environment.apiEndpoint + "/api/ManageTeacher/";
      token: any;
      username: any;

      constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('CoordinatorUser'));
        this.token = this.data.token;
      }
      public SaveTeacher(teacherModel: TeacherModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, teacherModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );

    }
    public GetAllTeachers() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<TeacherModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
          catchError(this.handleError)
      );
  }
  public GetTeacherByCoordinatorID(teacherId) {
    var editurl = this.apiUrl + teacherId;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<TeacherModel[]>(editurl, { headers: headers }).pipe(tap(data => data),
        catchError(this.handleError)
    );
  }
  public UpdateTeacher(teacherModel: TeacherModel) {
    var updateurl = this.apiUrl + teacherModel.TeacherId;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.put<any>(updateurl, teacherModel, { headers: headers })
        .pipe(
            catchError(this.handleError)
        );
  }
  public DeleteTeacher(teacherId) {
    var deleteUrl = this.apiUrl + '/' + teacherId;
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


