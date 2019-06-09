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
      path: 'department',
      component: DepartmentComponent,
      data: {
        title: 'department'
      }
    },
    {
      path: 'program',
      component: ManageProgramComponent,
      data: {
        title: 'program'
      }
    }, { path: 'program/edit/:ProgramID', component: EditProgramComponent
  },
  { path: 'program/add', component: AddProgramComponent
},

    {
      path: 'coordinator',
      component: AllCoordinatorComponent,
      data: {
        title: 'coordinator'
      }
    },
    {
      path: 'Admindashboard',
      component: AdminDashboardComponent,
      data: {
        title: 'AdminDashboard'
      }
    },
    { path: 'coordinator/edit/:CoordinatorID', component: EditCoordinatorComponent
  },
  { path: 'coordinator/add', component: ManageCoordinatorComponent
},
    {
      path: 'department',
      component: DepartmentComponent,
      data: {
        title: 'department'
      }
    },
    { path: 'department/edit/:DepartmentID', component: EditDepartmentComponent
  },
  { path: 'department/add', component: AddDepartmentComponent
},
    {
      path: 'role',
      component: RoleComponent,
      data: {
        title: 'role'
      }
    },
    { path: 'role/edit/:RoleID', component: EditRoleComponent
  },
  { path: 'role/add', component: AddRoleComponent
},
  ],
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
