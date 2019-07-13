import { Component, OnInit } from '@angular/core';
import { AssessmentModel } from '../Model/app.AssessmentModel';
import { AssessmentService } from '../Service/app.assessment.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.scss']
})
export class AddAssessmentComponent implements OnInit {
  private _assessmentService;


  errorMessage: any;
  assessmentModel: AssessmentModel = new AssessmentModel();
  title = 'Add Assessment';
    output: any;
    constructor(private _Route: Router,

      private assessmentService: AssessmentService,
     )  {
  this._assessmentService = assessmentService;
     }
     ngOnInit(): void {

        }
        onSubmit() {


          this._assessmentService.AddAssessment(this.assessmentModel).subscribe(
              response => {
              this.output = response
              if (this.output.StatusCode == "409") {
                  alert('Assessment Already Exists');
              }
              else if (this.output.StatusCode == "200") {
                  alert('Assessment Saved Successfully');
                  this._Route.navigate(['Teacher/Assessment']);
              }
              else {
                  alert('Something Went Wrong');
              }
          });
      }

}
