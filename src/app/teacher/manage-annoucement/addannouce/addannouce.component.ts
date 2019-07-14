import { AnnoucementService } from './../Service/app.Annoucement.Service';
import { AnnoucementModel } from './../Model/app.AnnouceModel';
import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../coordinator/manage-course/Models/app.CourseModel';
import { SectionModel } from '../../../coordinator/manage-section/Models/app.SectionModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addannouce',
  templateUrl: './addannouce.component.html',
  styleUrls: ['./addannouce.component.scss']
})
export class AddannouceComponent implements OnInit  {

  private _annoucementService;


  CourseList: CourseModel[];
  SectionList: SectionModel[];


  annoucementModel: AnnoucementModel = new AnnoucementModel();
  title = 'Add Annoucement';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private annoucementService: AnnoucementService
  )
  {
    this._annoucementService = annoucementService;

   }

   ngOnInit(): void {
    this._annoucementService.TeacherCourses().subscribe(
        allCourse => {
            this.CourseList = allCourse;
        },
        error => this.errorMessage = <any>error
    );


      }

      BindSection(courseId: number){
        //this._assignProjectService.TeacherSections(courseId);
        this._annoucementService.TeacherSections(courseId).subscribe(
          allCourse => {
              this.SectionList = allCourse;
          },
          error => this.errorMessage = <any>error
      );
      }
      onSubmit() {


        this._annoucementService.AddAnnoucement(this.annoucementModel).subscribe(
            response => {
            this.output = response
            if (this.output.StatusCode == "409") {
                alert('Annoucement Already Exists');
            }
            else if (this.output.StatusCode == "200") {
                alert('Annoucement Saved Successfully');
                this._Route.navigate(['Teacher/Annoucement']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

}

