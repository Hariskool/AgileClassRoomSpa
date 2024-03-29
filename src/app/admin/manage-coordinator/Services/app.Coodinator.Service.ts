import { CoordinatorViewModel } from './../Model/app.CoordinatorViewModel';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { environment } from 'src/app/Shared/environment';
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class CoordinatorService {
  private data: any;
    private apiUrl = environment.apiEndpoint + "/api/ManageCoordinator/";
    token: any;
    username: any;

    constructor(private http: HttpClient) {
      this.data = JSON.parse(localStorage.getItem('AdminUser'));
      this.token = this.data.token;
    }
    public SaveCoordinator(coordinaotrViewModel: CoordinatorViewModel) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
      return this.http.post<any>(this.apiUrl, coordinaotrViewModel, { headers: headers })
          .pipe(
              catchError(this.handleError)
          );

  }
  public GetAllCoordinators() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
    return this.http.get<CoordinatorViewModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
        catchError(this.handleError)
    );
}
public GetCoordinatorByCoordinatorID(coordinatorId) {
  var editurl = this.apiUrl + coordinatorId;
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
  return this.http.get<CoordinatorViewModel[]>(editurl, { headers: headers }).pipe(tap(data => data),
      catchError(this.handleError)
  );
}
public UpdateCoordinator(coordinaotrViewModel: CoordinatorViewModel) {
  var updateurl = this.apiUrl + coordinaotrViewModel.CoordinatorId;
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
  return this.http.put<any>(updateurl, coordinaotrViewModel, { headers: headers })
      .pipe(
          catchError(this.handleError)
      );
}
public DeleteCoordinator(coordinatorId) {
  var deleteUrl = this.apiUrl + '/' + coordinatorId;
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
