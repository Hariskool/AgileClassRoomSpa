import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllCoordinatorComponent } from './manage-coordinator/all-coordinator/all-coordinator.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { ManageProgramComponent } from './manage-program/manage-program.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { ManageCoordinatorComponent } from './manage-coordinator/manage-coordinator.component';
import { RoleComponent } from './role/role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { EditDepartmentComponent } from './department/edit-department/edit-department.component';
import { EditCoordinatorComponent } from './manage-coordinator/edit-coordinator/edit-coordinator.component';
import { EditProgramComponent } from './manage-program/edit-program/edit-program.component';
import { AddProgramComponent } from './manage-program/add-program/add-program.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Admin'
  },
  children: [
    {
      path: '',
      redirectTo: 'department'
    },
    {
      path: 'Department',
      component: DepartmentComponent,
      data: {
        title: 'department'
      }
    },
    {
      path: 'Program',
      component: ManageProgramComponent,
      data: {
        title: 'program'
      }
    }, { path: 'Program/edit/:ProgramID', component: EditProgramComponent
  },
  { path: 'Program/add', component: AddProgramComponent
},

    {
      path: 'Coordinator',
      component: AllCoordinatorComponent,
      data: {
        title: 'Coordinator'
      }
    },
    {
      path: 'Admindashboard',
      component: AdminDashboardComponent,
      data: {
        title: 'AdminDashboard'
      }
    },
    { path: 'Coordinator/Edit/:CoordinatorID', component: EditCoordinatorComponent
  },
  { path: 'Coordinator/Add', component: ManageCoordinatorComponent
},
    {
      path: 'Department',
      component: DepartmentComponent,
      data: {
        title: 'Department'
      }
    },
    { path: 'Department/Edit/:DepartmentID', component: EditDepartmentComponent
  },
  { path: 'Department/Add', component: AddDepartmentComponent
},
    {
      path: 'Role',
      component: RoleComponent,
      data: {
        title: 'Role'
      }
    },
    { path: 'Role/Edit/:RoleID', component: EditRoleComponent
  },
  { path: 'Role/Add', component: AddRoleComponent
},
  ],
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
