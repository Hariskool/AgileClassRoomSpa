import { AddgroupComponent } from './manage-groups/addgroup/addgroup.component';
import { AddannouceComponent } from './manage-annoucement/addannouce/addannouce.component';
import { ManageAnnoucementComponent } from './manage-annoucement/manage-annoucement.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { AddprojectComponent } from './manage-project/addproject/addproject.component';
import { AddaprojectComponent } from './manage-assignproject/addaproject/addaproject.component';
import { ManageAssignprojectComponent } from './manage-assignproject/manage-assignproject.component';

import { ManageProjectComponent } from './manage-project/manage-project.component';
import { AddAssessmentComponent } from './manage-assessment/add-assessment/add-assessment.component';
import { ManageAssessmentComponent } from './manage-assessment/manage-assessment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteredStudent } from './get-students/Model/app.RegisteredStudent';
import { GetStudentsComponent } from './get-students/get-students.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Teacher'
  },
  children: [
    {
      path: '',
      redirectTo: 'Course'
    },{
      path: 'TeacherDashboard',
      component: TeacherDashboardComponent,
      data: {
        title: 'Assessment'
      }
    },
    {
      path: 'Group',
      component: ManageGroupsComponent,
      data: {
        title: 'Group'
      }
    },
      {
        path: 'Group/Add',
        component: AddgroupComponent,
        data: {
          title: 'Group'
        }
    },
    {
      path: 'TeacherDashboar',
      component: TeacherDashboardComponent,
      data: {
        title: 'Dashboard'
      }
    },
    {
      path: 'Annoucement',
      component: ManageAnnoucementComponent,
      data: {
        title: 'Annoucement'
      }
    },
    {
      path: 'Group',
      component: ManageGroupsComponent,
      data: {
        title: 'Group'
      }
    },
      {
        path: 'Annoucement/Add',
        component: AddannouceComponent,
      },
    {
      path: 'Assessment',
      component: ManageAssessmentComponent,
      data: {
        title: 'Assessment'
      }
    },
      {
        path: 'Assessment/Add',
        component: AddAssessmentComponent,
      },
      {
        path: 'GetStudent',
        component: GetStudentsComponent,
      },
      {
        path: 'Project',
        component: ManageProjectComponent,
        data: {
          title: 'Project'
        }
      },
        {
          path: 'Project/Add',
          component: AddprojectComponent,
        },
        {
          path: 'AssignProject',
          component: ManageAssignprojectComponent,
          data: {
            title: 'assignProject'
          }
        },
          {
            path: 'AssignProject/Add',
            component: AddaprojectComponent,
          },
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TeacherRoutingModule {}
