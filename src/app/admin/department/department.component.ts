import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentModel } from './Models/app.DepartmentModel';
import { DepartmentService } from './Services/app.department.Service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {


  private _departmentService;
  DepartmentList: DepartmentModel = new DepartmentModel();
  output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['DepartmentId', 'DepartmentName', 'Description', 'Action'];
  dataSource: any;

  constructor(private _Route: Router, departmentService: DepartmentService) {
      this._departmentService = departmentService;
  }

  ngOnInit(): void {
      this._departmentService.GetAllDepartment().subscribe(
          alldepartment => {
              this.DepartmentList = alldepartment;
              this.dataSource = new MatTableDataSource(alldepartment);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
          },
          error => this.errorMessage = <any>error
      );
  }

  addbtn(){
    this._Route.navigateByUrl('/Admin/Department/Add');
  }
  Delete(DepartmentId) {

      if (confirm("Are you sure to delete department ?")) {
          this._departmentService.DeleteDepartment(DepartmentId).subscribe
              (
              response => {
                  if (response.StatusCode == "200") {
                    Swal.fire({
                      position: 'center',
                      type: 'success',
                      title: 'Department Deleted',
                      showConfirmButton: false,
                      timer: 1500
                    })
                      location.reload();
                  }
                  else {
                    Swal.fire({
                      position: 'center',
                      type: 'error',
                      title: 'Department Not Editted',
                      showConfirmButton: false,
                      timer: 1500
                    })
                      this._Route.navigate(['/Admin/Department']);
                  }
              }
              )
      }
  }
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
