import { SectionService } from './../Services/app.section.Service';
import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../../manage-teacher/Model/app.TeacherModel';
import { SectionModel } from '../Models/app.SectionModel';
import { CourseModel } from '../../manage-course/Models/app.CourseModel';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsection',
  templateUrl: './editsection.component.html',
  styleUrls: ['./editsection.component.scss']
})
export class EditsectionComponent implements OnInit {
  private _sectionService;
  TeacherList: TeacherModel[];
  CourseList: CourseModel[];
  sectionModel: SectionModel = new SectionModel();
  title = 'Edit Section';
    output: any;
    errorMessage: any;
    SectionID: any;
  constructor(private _Route: Router, private sectionService: SectionService,
    private _routeParams: ActivatedRoute)
  {
    this._sectionService = sectionService;
   }

   ngOnInit(): void {

    this.SectionID = this._routeParams.snapshot.params['SectionID'];
    this._sectionService.GetSectionById(this.SectionID).subscribe(
        course => {
            this.sectionModel = course;
        },
        error => this.errorMessage = <any>error
    );
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


        this._sectionService.UpdateSection(this.sectionModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Already Existed',
                showConfirmButton: false,
                timer: 1500
              })
            }
            else if (this.output.StatusCode == "200") {
              Swal.fire({
                position: 'center',
                type: 'success',
                title: ' Edited',
                showConfirmButton: false,
                timer: 1500
              })
                this._Route.navigate(['Coordinator/Section']);
            }
            else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Error  ',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    }

}
