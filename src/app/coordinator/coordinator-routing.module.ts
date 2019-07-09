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
      redirectTo: 'course'
    },
    {
      path: 'Course',
      component: ManageCourseComponent,
      data: {
        title: 'course'
      }
    },
    {
      path: 'addcourse',
      component: AddcourseComponent,
    },
    {
      path: 'course/edit/:CourseID',
      component: EditcourseComponent,
    },
    {
      path: 'section',
      component: ManageSectionComponent,
      data: {
        title: 'section'
      }
    },
    {
      path: 'enrolment',
      component: ManageEnrolmentComponent,
      data: {
        title: 'enrolment'
      }
    },{
      path: 'addenrol',
      component: AdllenrolComponent,
    },
    {
      path: 'student',
      component: ManageStudentComponent,
      data: {
        title: 'student'
      }
    },
    {
      path: 'addstudent',
      component: AddstudentComponent,
    },
    {
      path: 'student/edit/:StudentID',
      component: EditstudentComponent,
    },
    {
      path: 'teacher',
      component: ManageTeacherComponent,
      data: {
        title: 'teacher'
      }
    },
    {
      path: 'addteacher',
      component: AddteacherComponent,
    },
    {
      path: 'teacher/edit/:TeacherID',
      component: EditteacherComponent,
    },
    {
      path: 'Section',
      component: ManageSectionComponent,
      data: {
        title: 'section'
      }
    },
    {
      path: 'section/edit/:SectionID',
      component: EditsectionComponent,
    },
    {
      path: 'addsection',
      component: AddsectionComponent,
    },
  ],
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule {}
