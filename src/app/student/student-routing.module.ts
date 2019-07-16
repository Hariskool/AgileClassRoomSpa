import { ActiveSprintComponent } from './sprint/active-sprint/active-sprint.component';
import { EditTaskComponent } from './Task/edit-task/edit-task.component';
import { AddTaskComponent } from './Task/add-task/add-task.component';
import { AddepicComponent } from './epic/addepic/addepic.component';
import { EpicComponent } from './epic/epic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path: '',
  data: {
    title: 'Student'
  },
  children: [
    {
      path: '',
      redirectTo: 'course'
    },
    {
      path: 'ActiveSprint',
      component: ActiveSprintComponent,
      data: {
        title: 'ActiveSprint'
      }
    },
    {
      path: 'Task',
      component: AddTaskComponent,
      data: {
        title: 'Task'
      }
    },{
      path: 'Task/Edit/:groupId',
      component: EditTaskComponent,
    },
    {
      path: 'Epic',
      component: EpicComponent,
      data: {
        title: 'Epic'
      }
    },
    {
      path: 'Epic/Edit/:groupId',
      component: AddepicComponent,
    },


  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
