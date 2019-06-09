import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminAuthGuardGuard } from './../../AuthGuard/admin-auth-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { CoordinatorDashboardComponent } from './coordinator-dashboard/coordinator-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'coordinator',
        component: CoordinatorDashboardComponent,
      },
      {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'studentDashboard',
        component: StudentDashboardComponent,
      },
      {
        path: 'teacherDashboard',
        component: TeacherDashboardComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
