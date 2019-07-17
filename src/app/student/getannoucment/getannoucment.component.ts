import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnoucementModel } from '../../teacher/manage-annoucement/Model/app.AnnouceModel';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AnnoucementService } from '../../teacher/manage-annoucement/Service/app.Annoucement.Service';

@Component({
  selector: 'app-getannoucment',
  templateUrl: './getannoucment.component.html',
  styleUrls: ['./getannoucment.component.scss']
})
export class GetannoucmentComponent implements OnInit {


  private _annoucementService;

  annoucementModel: AnnoucementModel = new AnnoucementModel();
  title = 'All Annoucement';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sectionNO', 'CourseName', 'Description', 'EndDate',
   ];
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





  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }

