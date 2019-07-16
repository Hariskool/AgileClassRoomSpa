import { ProgramViewModel } from './Models/app.ProgramViewModel';
import { ProgramService } from './Services/app.Program.Service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-program',
  templateUrl: './manage-program.component.html',
  styleUrls: ['./manage-program.component.scss']
})
export class ManageProgramComponent implements OnInit {
  private _programService;

  programModel: ProgramViewModel = new ProgramViewModel();
  title = 'All Program';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['ProgramID', 'ProgramName',
  'ProgramCode', 'CoordinatorName', 'TotalCreditHour', 'Action'];
  dataSource: any;
  constructor(private _Route: Router, private programSerice: ProgramService) {
    this._programService = programSerice;
}
addbtn(){
  this._Route.navigateByUrl('/Admin/Program/Add');
}
ngOnInit(): void {


  this._programService.GetAllPrograms().subscribe(
      allprogram => {
          this.programModel = allprogram,
          this.dataSource = new MatTableDataSource(allprogram);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
  );
}


Delete(ProgramID) {
  if (confirm("Are you sure to delete Program ?")) {
      this._programService.DeleteProgram(ProgramID).subscribe
          (
          response => {
              if (response.StatusCode == "200") {
                Swal.fire({
                  position: 'center',
                  type: 'success',
                  title: 'Program Deleted',
                  showConfirmButton: false,
                  timer: 1500
                })
                  location.reload();
              }
              else {
                Swal.fire({
                  position: 'center',
                  type: 'error',
                  title: 'Something went wrong',
                  showConfirmButton: false,
                  timer: 1500
                })
                  this._Route.navigate(['Admin/Program']);
              }
          }
          )
  }
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
