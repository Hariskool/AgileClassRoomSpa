import { MaterialModule } from './../material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { ManageCoordinatorComponent } from './manage-coordinator/manage-coordinator.component';
import { ManageProgramComponent } from './manage-program/manage-program.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { AllCoordinatorComponent } from './manage-coordinator/all-coordinator/all-coordinator.component';
import { EditCoordinatorComponent } from './manage-coordinator/edit-coordinator/edit-coordinator.component';
import { EditProgramComponent } from './manage-program/edit-program/edit-program.component';
import { AddProgramComponent } from './manage-program/add-program/add-program.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [DepartmentComponent, RoleComponent,
     ManageCoordinatorComponent, ManageProgramComponent,
     EditRoleComponent, AddRoleComponent, EditDepartmentComponent,
     AddDepartmentComponent, AllCoordinatorComponent, EditCoordinatorComponent,
     EditProgramComponent, AddProgramComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ],
})
export class AdminModule { }
