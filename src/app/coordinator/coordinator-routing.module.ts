import { EditenrolComponent } from './manage-enrolment/editenrol/editenrol.component';
import { CoordinatorDashboardComponent } from './coordinator-dashboard/coordinator-dashboard.component';
import { CoordinatorDashboard } from './coordinator-dashboard/Model/app.CoordinatorDashboardMode';
import { AddcourseComponent } from './manage-course/addcourse/addcourse.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { ManageEnrolmentComponent } from './manage-enrolment/manage-enrolment.component';
import { ManageSectionComponent } from './manage-section/manage-section.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditcourseComponent } from './manage-course/editcourse/editcourse.component';
import {EditteacherComponent} from "./manage-teacher/editteacher/editteacher.component";
import {AddteacherComponent} from "./manage-teacher/addteacher/addteacher.component";
import {AddstudentComponent} from "./manage-student/addstudent/addstudent.component";
import {EditstudentComponent} from "./manage-student/editstudent/editstudent.component";
import {EditsectionComponent} from "./manage-section/editsection/editsection.component";
import {AddsectionComponent} from "./manage-section/addsection/addsection.component";
import { AdllenrolComponent } from './manage-enrolment/adllenrol/adllenrol.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Coordinator'
  },
  children: [
    {
      path: '',
      redirectTo: 'Course'
    },
    {
      path: 'Course',
      component: ManageCourseComponent,
      data: {
        title: 'course'
      }
    },
    {
      path: 'Course/Add',
      component: AddcourseComponent,
    },
    {
      path: 'Course/Edit/:CourseID',
      component: EditcourseComponent,
    },
    {
      path: 'Section',
      component: ManageSectionComponent,
      data: {
        title: 'section'
      }
    },
    {
      path: 'Enrolment',
      component: ManageEnrolmentComponent,
      data: {
        title: 'enrolment'
      }
    },{
      path: 'Enrolment/Add',
      component: AdllenrolComponent,
    },
    {
      path: 'Enrolment/Edit/:EnrolmentID',
      component: EditenrolComponent,
    },
    {
      path: 'Student',
      component: ManageStudentComponent,
      data: {
        title: 'student'
      }
    },
    {
      path: 'Student/Add',
      component: AddstudentComponent,
    },
    {
      path: 'Student/Edit/:StudentID',
      component: EditstudentComponent,
    },
    {
      path: 'Teacher',
      component: ManageTeacherComponent,
      data: {
        title: 'teacher'
      }
    },
    {
      path: 'Teacher/Add',
      component: AddteacherComponent,
    },
    {
      path: 'Teacher/Edit/:TeacherID',
      component: EditteacherComponent,
    },
    {
      path: 'Section',
      component: ManageSectionComponent,
      data: {
        title: 'Section'
      }
    },
    {
      path: 'Section/Edit/:SectionID',
      component: EditsectionComponent,
    },
    {
      path: 'Section/Add',
      component: AddsectionComponent,
    },
    {
      path: 'CoordinatorDashboard',
      component: CoordinatorDashboardComponent,
    },
  ],
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule {}
