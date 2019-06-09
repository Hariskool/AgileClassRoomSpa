

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestmoduleComponent } from './testmodule/testmodule.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoordinatorDashboardComponent } from './coordinator-dashboard/coordinator-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent, TestmoduleComponent, AdminDashboardComponent, CoordinatorDashboardComponent,
     TeacherDashboardComponent, StudentDashboardComponent ]
})
export class DashboardModule { }
