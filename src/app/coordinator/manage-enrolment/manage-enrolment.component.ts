import { EnrolService } from './Service/app.enrolment.Service';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { EnrolModel } from './Models/app.EnrolModel';
@Component({
  selector: 'app-manage-enrolment',
  templateUrl: './manage-enrolment.component.html',
  styleUrls: ['./manage-enrolment.component.scss']
})
export class ManageEnrolmentComponent implements OnInit {
  private _enrolService;
  enrolModel: EnrolModel = new EnrolModel();
  title = 'All Enrolments';
  output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['SectionNo', 'CourseName',
    'StudentName', 'Action'];
  dataSource: any;

  constructor(private _Route: Router,
              private enrolService: EnrolService,
  )  {
    this._enrolService = enrolService;
  }

  ngOnInit(): void {


    this._enrolService.GetAllEnrols().subscribe(
      allEnrols => {
        this.enrolModel = allEnrols;
        this.dataSource = new MatTableDataSource(allEnrols);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
    );
  }

  Delete(EnrolId) {
    if (confirm('Are you sure to delete Enrolment ?')) {
      this._enrolService.DeleteEnrol(EnrolId).subscribe
      (
        response => {
          if (response.StatusCode == "200") {
            alert('Deleted Enrol Successfully');
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
