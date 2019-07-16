import { NotificationModel } from './../Model/app.NotificationModel';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

// import { environment } from 'src/app/Shared/environment';


import { environment } from '../../../environments/environment.prod';
@Injectable({
    providedIn: 'root'
})
export class Notification {

  private data: any;
  private  adminuser = localStorage.getItem('AdminUser');
  private coordinatoruser = localStorage.getItem('CoordinatorUser');
  private Teacheruser = localStorage.getItem('TeacherUser');
  private Studentuser = localStorage.getItem('StudentUser');
  private apiUrl = environment.apiEndpoint +"/api/ManageNotification/";

  token: any;
  username: any;

constructor(private http: HttpClient) {
  if(this.adminuser!= null){
    this.data = JSON.parse(localStorage.getItem('AdminUser'));
  }
  if(this.coordinatoruser!= null){
    this.data = JSON.parse(localStorage.getItem('CoordinatorUser'));
  }
  if(this.Teacheruser!= null){
    this.data = JSON.parse(localStorage.getItem('TeacherUser'));
  }
  if(this.Studentuser!= null){
    this.data = JSON.parse(localStorage.getItem('StudentUser'));
  }

        this.token = this.data.token;
    }

    public NotficationDashboard() {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.get<NotificationModel[]>(this.apiUrl + '/NotificationDashboard' , { headers: headers }).pipe(tap(data => data),
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
