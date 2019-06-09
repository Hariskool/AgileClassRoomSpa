import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { RoleModel } from './Models/app.RoleModel';
import { RoleService } from './Services/app.role.Service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {


  private _roleService;
  RoleList: RoleModel = new RoleModel();
  output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['RoleId', 'RoleName', 'Status', 'Action'];
  dataSource: any;

  constructor(private _Route: Router, roleService: RoleService,
    private changeDetectorRefs: ChangeDetectorRef) {
      this._roleService = roleService;
  }

  ngOnInit(): void {
    this.loadData();
  }

loadData(){
  this._roleService.GetAllRole().subscribe(
    allrole => {
        this.RoleList = allrole
        this.dataSource = new MatTableDataSource(allrole);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
    },
    error => this.errorMessage = <any>error
);
}
  Delete(RoleId) {

      if (confirm("Are you sure to delete Role ?")) {
          this._roleService.DeleteRole(RoleId).subscribe
              (
              response => {
                  if (response.StatusCode == "200") {
                      alert('Deleted Role Successfully');
                      location.reload();
                  }
                  else {
                      alert('Something Went Wrong');
                      this._Route.navigate(['/Role/All']);
                  }
              }
              )
      }
  }
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
