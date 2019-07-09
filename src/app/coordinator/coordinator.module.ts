import { BrowserModule } from '@angular/platform-browser';
import { EditcourseComponent } from './manage-course/editcourse/editcourse.component';
import { AddcourseComponent } from './manage-course/addcourse/addcourse.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { ManageSectionComponent } from './manage-section/manage-section.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageEnrolmentComponent } from './manage-enrolment/manage-enrolment.component';
import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { EditteacherComponent } from './manage-teacher/editteacher/editteacher.component';
import { AddteacherComponent } from './manage-teacher/addteacher/addteacher.component';
import { AddstudentComponent } from './manage-student/addstudent/addstudent.component';
import { EditstudentComponent } from './manage-student/editstudent/editstudent.component';
import { AdllenrolComponent } from './manage-enrolment/adllenrol/adllenrol.component';
import { EditenrolComponent } from './manage-enrolment/editenrol/editenrol.component';
import { EditsectionComponent } from './manage-section/editsection/editsection.component';
import { AddsectionComponent } from './manage-section/addsection/addsection.component';
@NgModule({
  declarations: [ManageTeacherComponent, ManageSectionComponent,
     ManageCourseComponent, AddcourseComponent, EditcourseComponent ,
    ManageEnrolmentComponent,ManageStudentComponent, EditteacherComponent, AddteacherComponent, AddstudentComponent,
    EditstudentComponent, AdllenrolComponent, EditenrolComponent, EditsectionComponent, AddsectionComponent],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CoordinatorModule { }
