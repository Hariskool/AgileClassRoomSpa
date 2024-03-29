import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CourseModel} from "../../manage-course/Models/app.CourseModel";
import {TeacherModel} from "../../manage-teacher/Model/app.TeacherModel";
import {SectionService} from "../Services/app.section.Service";
import {SectionModel} from "../Models/app.SectionModel";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addsection',
  templateUrl: './addsection.component.html',
  styleUrls: ['./addsection.component.scss']
})
export class AddsectionComponent implements OnInit {

  private _sectionService;
  TeacherList: TeacherModel[];
  CourseList: CourseModel[];
  sectionModel: SectionModel = new SectionModel();
  title = 'Add Section';
  output: any;
  errorMessage: any;
  constructor(private _Route: Router, private sectionService: SectionService) {
    this._sectionService = sectionService;
  }

  ngOnInit():void {
    this._sectionService.GetAllTeachersCoordinator().subscribe(
      allTeachers => {
        this.TeacherList = allTeachers;
      },
      error => this.errorMessage = <any>error
    );

    this._sectionService.GetAllCourseCoordinator().subscribe(
      allCourses => {
        this.CourseList = allCourses;
      },
      error => this.errorMessage = <any>error
    );

  }

  onSubmit() {


    this._sectionService.AddSection(this.sectionModel).subscribe(
      response => {
        this.output = response
        if (this.output.StatusCode == "409") {
          Swal.fire({
            position: 'center',
            type: 'error',
            title: ' Already existed',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else if (this.output.StatusCode == "200") {
          Swal.fire({
            position: 'center',
            type: 'success',
            title: ' Added',
            showConfirmButton: false,
            timer: 1500
          })
          this._Route.navigate(['Coordinator/Section']);
        }
        else {
          Swal.fire({
            position: 'center',
            type: 'error',
            title: ' Error',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  }

}

