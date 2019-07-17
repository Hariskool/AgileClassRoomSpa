import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoucementService } from '../Service/app.Annoucement.Service';
import { AnnoucementModel } from '../Model/app.AnnouceModel';
import { CourseModel } from '../../../coordinator/manage-course/Models/app.CourseModel';
import { SectionModel } from '../../../coordinator/manage-section/Models/app.SectionModel';

@Component({
  selector: 'app-editannouce',
  templateUrl: './editannouce.component.html',
  styleUrls: ['./editannouce.component.scss']
})
export class EditannouceComponent implements OnInit {

  private _annoucementService;

  departmentId: number;
  CourseList: CourseModel[];
  SectionList: SectionModel[];


  annoucementModel: AnnoucementModel = new AnnoucementModel();
  title = 'Add Annoucement';
    output: any;
    errorMessage: any;
  constructor(private _Route: Router, private _routeParams: ActivatedRoute, private annoucementService: AnnoucementService
  )
  {
    this._annoucementService = annoucementService;

   }

   ngOnInit(): void {
    this.departmentId = this._routeParams.snapshot.params['AnnoucementID'];
    console.log('this---' + this.departmentId);
    this._annoucementService.GetAnnoucementById(this.departmentId).subscribe(
      allCourse => {
          this.annoucementModel = allCourse;
      },
      error => this.errorMessage = <any>error
  );
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


        this._annoucementService.UpdateAnnoucement(this.annoucementModel).subscribe(
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

