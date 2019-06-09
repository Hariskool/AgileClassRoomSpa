import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { DepartmentModel } from '../Models/app.DepartmentModel';
// import { environment } from 'src/app/Shared/environment';
import {environment} from '../../../../environments/environment';
@Injectable({
    providedIn: 'root'
})

export class DepartmentService {

    private data: any;
    private apiUrl = environment.apiEndpoint + "/api/Department/";
    token: any;
    username: any;

    constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }

    public AddDepartment(departmentmodel: DepartmentModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, departmentmodel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    // Get All Role
    public GetAllDepartment() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<DepartmentModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Get All Role By ID
    public GetDepartmentById(DepartmentId) {
        var editUrl = this.apiUrl + '/' + DepartmentId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<DepartmentModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update Role
    public UpdateDepartment(departmentmodel: DepartmentModel) {
        var putUrl = this.apiUrl + '/' + departmentmodel.DepartmentId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, departmentmodel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public DeleteDepartment(DepartmentId) {
        var deleteUrl = this.apiUrl + '/' + DepartmentId;
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
