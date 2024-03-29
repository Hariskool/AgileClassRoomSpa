import { StudentService } from './Services/app.Student.Service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentModel } from './Model/app.StudentModel';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {
  private _studentService;
  studentModel: StudentModel = new StudentModel();
  title = 'All Students';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['StudentName', 'EmailID',
  'ContactNo', 'Password', 'CGPA', 'Semester', 'Department'];
  dataSource: any;
  constructor(private _Route: Router,
    private studentService: StudentService,
   )  {
this._studentService = studentService;

   }
   addbtn(){
    this._Route.navigateByUrl('/Coordinator/Student/Add');
  }

   ngOnInit(): void {


    this._studentService.GetAllStudents().subscribe(
        allStudents => {
            this.studentModel = allStudents
            this.dataSource = new MatTableDataSource(allStudents);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        },
        error => this.errorMessage = <any>error
    );
}


Delete(StudentId) {
    if (confirm("Are you sure to delete Student ?")) {
        this._studentService.DeleteStudent(StudentId).subscribe
            (
            response => {
                if (response.StatusCode == "200") {
                  Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: ' Deleted',
                    showConfirmButton: false,
                    timer: 1500
                  })
                    location.reload();
                }
                else {
                  Swal.fire({
                    position: 'center',
                    type: 'error',
                    title: ' Error',
                    showConfirmButton: false,
                    timer: 1500
                  })
                    this._Route.navigate(['/Coordinator/Student']);
                }
            }
            )
    }
}

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
