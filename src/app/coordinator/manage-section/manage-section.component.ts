import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import {SectionModel} from "./Models/app.SectionModel";
import {SectionService} from "./Services/app.section.Service";

@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.scss']
})
export class ManageSectionComponent implements OnInit {
  private _sectionService;
  sectionModel: SectionModel = new SectionModel();
  title = 'All Sections';
  output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['SectionNo', 'CourseName',
    'TeacherName', 'Action'];
  dataSource: any;
  constructor(private _Route: Router,
              private sectionService: SectionService,
  )  {
    this._sectionService = sectionService;

  }

  ngOnInit(): void {


    this._sectionService.GetAllSections().subscribe(
      allSections => {
        this.sectionModel = allSections
        this.dataSource = new MatTableDataSource(allSections);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
    );
  }

  Delete(SectionId) {
    if (confirm("Are you sure to delete Section ?")) {
      this._sectionService.DeleteSection(SectionId).subscribe
      (
        response => {
          if (response.StatusCode == "200") {
            alert('Deleted Section Successfully');
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
