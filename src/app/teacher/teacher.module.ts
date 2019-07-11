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


@NgModule({
  declarations: [ManageAssessmentComponent, ManageProjectComponent,
    ManageAssignprojectComponent, ManageAnnoucementComponent, ManageGroupsComponent,
     GetStudentsComponent, ManageResultComponent, AddAssessmentComponent, EditAssessmentComponent ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ]
})

export class TeacherModule { }
