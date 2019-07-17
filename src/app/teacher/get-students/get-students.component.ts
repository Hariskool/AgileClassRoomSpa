import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisteredStudent } from './Model/app.RegisteredStudent';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AssignProjectService } from '../manage-assignproject/Service/app.AssignProject.Service';
import { Router } from '@angular/router';
import { RegisteredStudentService } from './Service/app.GetSTD.Service';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.scss']
})
export class GetStudentsComponent implements OnInit {

  private _registeredStudentService;
  registeredStudent: RegisteredStudent = new RegisteredStudent();
  title = 'All RegisteredStudent';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['FullName', 'EmailId',
  'Contactno','CourseName','SectionNo','Cgpa','Semester'];
  dataSource: any;
  constructor(private _Route: Router,
    private registeredStudentService: RegisteredStudentService,
   )  {
       this._registeredStudentService = registeredStudentService;

   }

   ngOnInit(): void {


    this._registeredStudentService.GetAllStudents().subscribe(
        allCourses => {
            this.registeredStudent = allCourses
            this.dataSource = new MatTableDataSource(allCourses);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        },
        error => this.errorMessage = <any>error
    );
}




applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}

