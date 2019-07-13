import { GroupModel } from './Model/app.GroupModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { GroupService } from './Service/app.Group.Service';
import { GroupMemeber } from './Model/app.GroupMemberModel';

@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss']
})
export class ManageGroupsComponent implements OnInit{
  private _groupService;

  groupModel: GroupModel = new GroupModel();
  groupMemberModel: GroupMemeber[];

  title = 'All Group';
    output: any;
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['AssessmentName', 'TotalMarks',
   'Action'];
  dataSource: any;
  constructor(private _Route: Router, private groupService: GroupService) {
    this._groupService = groupService;

}

ngOnInit(): void {


  this._groupService.GetAllGroups().subscribe(
      allprogram => {
          this.groupModel = allprogram;
          this.groupMemberModel = this.groupModel.groupMembers;
          console.log(this.groupMemberModel);
          console.log(this.groupModel);
     },
      error => this.errorMessage = <any>error
  );
}


Delete(ProgramID) {
  if (confirm("Are you sure to delete Group ?")) {
      this._groupService.DeleteGroup(ProgramID).subscribe
          (
          response => {
              if (response.StatusCode == "200") {
                  alert('Deleted Group Successfully');
                  location.reload();
              }
              else {
                  alert('Something Went Wrong');
                  this._Route.navigate(['Teacher/Assessment']);
              }
          }
          )
  }
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
