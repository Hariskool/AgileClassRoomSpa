import { AddprojectComponent } from './manage-project/addproject/addproject.component';
import { AddaprojectComponent } from './manage-assignproject/addaproject/addaproject.component';
import { ManageAssignprojectComponent } from './manage-assignproject/manage-assignproject.component';

import { ManageProjectComponent } from './manage-project/manage-project.component';
import { AddAssessmentComponent } from './manage-assessment/add-assessment/add-assessment.component';
import { ManageAssessmentComponent } from './manage-assessment/manage-assessment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Teacher'
  },
  children: [
    {
      path: '',
      redirectTo: 'course'
    },
    {
      path: 'Assessment',
      component: ManageAssessmentComponent,
      data: {
        title: 'Assessment'
      }
    },
      {
        path: 'Addassessmet',
        component: AddAssessmentComponent,
      },
      {
        path: 'Project',
        component: ManageProjectComponent,
        data: {
          title: 'Project'
        }
      },
        {
          path: 'Addproject',
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
            path: 'Addassignproject',
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
