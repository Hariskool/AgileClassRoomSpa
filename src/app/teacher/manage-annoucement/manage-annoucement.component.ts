import { AnnoucementModel } from './Model/app.AnnouceModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AnnoucementService } from './Service/app.Annoucement.Service';

@Component({
  selector: 'app-manage-annoucement',
  templateUrl: './manage-annoucement.component.html',
  styleUrls: ['./manage-annoucement.component.scss']
})
export class ManageAnnoucementComponent implements OnInit {

  addbtn(){
    this._Route.navigateByUrl('/Teacher/Annoucement/Add');
  }
  private _annoucementService;

  annoucementModel: AnnoucementModel = new AnnoucementModel();
  title = 'All Annoucement';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sectionNO', 'CourseName', 'Description', 'EndDate',
   'Action'];
  dataSource: any;
  constructor(private _Route: Router, private annoucementSerice: AnnoucementService) {
    this._annoucementService = annoucementSerice;
  }

  ngOnInit(): void {


  this._annoucementService.GetAllAnnoucements().subscribe(
      allprogram => {
          this.annoucementModel = allprogram,
          this.dataSource = new MatTableDataSource(allprogram);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
  );
  }


  Delete(ProgramID) {
  if (confirm("Are you sure to delete Annoucement ?")) {
      this._annoucementService.DeleteAnnoucement(ProgramID).subscribe
          (
          response => {
              if (response.StatusCode == "200") {
                  alert('Deleted Annoucement Successfully');
                  location.reload();
              }
              else {
                  alert('Something Went Wrong');
                  this._Route.navigate(['Teacher/Annoucement']);
              }
          }
          )
  }
  }

  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }

