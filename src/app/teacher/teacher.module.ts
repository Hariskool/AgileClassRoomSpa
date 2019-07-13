import { ManageAssessmentComponent } from './manage-assessment/manage-assessment.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { ManageAssignprojectComponent } from './manage-assignproject/manage-assignproject.component';
import { ManageAnnoucementComponent } from './manage-annoucement/manage-annoucement.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { GetStudentsComponent } from './get-students/get-students.component';
import { ManageResultComponent } from './manage-result/manage-result.component';
import { AddAssessmentComponent } from './manage-assessment/add-assessment/add-assessment.component';
import { EditAssessmentComponent } from './manage-assessment/edit-assessment/edit-assessment.component';
import { EditprojectComponent } from './manage-project/editproject/editproject.component';
import { AddprojectComponent } from './manage-project/addproject/addproject.component';
import { AddaprojectComponent } from './manage-assignproject/addaproject/addaproject.component';
import { EditaprojectComponent } from './manage-assignproject/editaproject/editaproject.component';
import { EditgroupComponent } from './manage-groups/editgroup/editgroup.component';
import { AddgroupComponent } from './manage-groups/addgroup/addgroup.component';
import { AddannouceComponent } from './manage-annoucement/addannouce/addannouce.component';
import { EditannouceComponent } from './manage-annoucement/editannouce/editannouce.component';

@NgModule({
  declarations: [ManageAssessmentComponent, ManageProjectComponent,
    ManageAssignprojectComponent, ManageAnnoucementComponent, ManageGroupsComponent,
     GetStudentsComponent, ManageResultComponent, AddAssessmentComponent, EditAssessmentComponent, EditprojectComponent, AddprojectComponent, AddaprojectComponent, EditaprojectComponent, EditgroupComponent, AddgroupComponent, AddannouceComponent, EditannouceComponent ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ]
})

export class TeacherModule { }
