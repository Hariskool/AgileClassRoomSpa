import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CourseService } from './Services/app.course.Service';
import { CourseModel } from './Models/app.CourseModel';
@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {
  private _courseService;
  courseModel: CourseModel = new CourseModel();
  title = 'All Courses';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['CourseName', 'CourseCode',
  'CreditHours', 'Program', 'Coordinator', 'Action'];
  dataSource: any;
  constructor(private _Route: Router,
    private courseService: CourseService,
   )  {
this._courseService = courseService;

   }

   ngOnInit(): void {


    this._courseService.GetAllCourses().subscribe(
        allCourses => {
            this.courseModel = allCourses
            this.dataSource = new MatTableDataSource(allCourses);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        },
        error => this.errorMessage = <any>error
    );
}


Delete(CourseID) {
    if (confirm("Are you sure to delete Course ?")) {
        this._courseService.DeleteCourse(CourseID).subscribe
            (
            response => {
                if (response.StatusCode == "200") {
                    alert('Deleted Courses Successfully');
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
