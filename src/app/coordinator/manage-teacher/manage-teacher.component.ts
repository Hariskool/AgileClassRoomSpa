import { TeacherService } from './Service/app.Teacher.Service';
import { TeacherModel } from './Model/app.TeacherModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.scss']
})
export class ManageTeacherComponent implements OnInit {

  private _teacherService;
  teacherModel: TeacherModel = new TeacherModel();
  title = 'All Teachers';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['TeacherName', 'EmailID',
  'ContactNo', 'Password', 'Status', 'Department'];
  dataSource: any;
  constructor(private _Route: Router,
    private teacherService: TeacherService,
   )  {
this._teacherService = teacherService;

   }

   ngOnInit(): void {


    this._teacherService.GetAllTeachers().subscribe(
        allTeachers => {
            this.teacherModel = allTeachers
            this.dataSource = new MatTableDataSource(allTeachers);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        },
        error => this.errorMessage = <any>error
    );
}


Delete(TeacherId) {
    if (confirm("Are you sure to delete Teacher ?")) {
        this._teacherService.DeleteTeacher(TeacherId).subscribe
            (
            response => {
                if (response.StatusCode == "200") {
                    alert('Deleted Teacher Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    this._Route.navigate(['/Course']);
                }
            }
            )
    }
}

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
