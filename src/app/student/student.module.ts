import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EpicComponent } from './epic/epic.component';
import { AddepicComponent } from './epic/addepic/addepic.component';
import { EditepicComponent } from './epic/editepic/editepic.component';
import { SprintComponent } from './sprint/sprint.component';
import { ActiveSprintComponent } from './sprint/active-sprint/active-sprint.component';
import { AddTaskComponent } from './Task/add-task/add-task.component';
import { EditTaskComponent } from './Task/edit-task/edit-task.component';
import { GetresultComponent } from './getresult/getresult.component';
import { GetannoucmentComponent } from './getannoucment/getannoucment.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
@NgModule({
  declarations: [EpicComponent, AddepicComponent, EditepicComponent, SprintComponent,
     ActiveSprintComponent, AddTaskComponent,
      EditTaskComponent, GetresultComponent, GetannoucmentComponent, StudentDashboardComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,

  ]
})
export class StudentModule { }
