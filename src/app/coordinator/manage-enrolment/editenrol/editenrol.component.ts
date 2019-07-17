import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnrolService } from '../Service/app.enrolment.Service';
import { StudentModel } from '../../manage-student/Model/app.StudentModel';
import { SectionModel } from '../../manage-section/Models/app.SectionModel';
import Swal from 'sweetalert2';
import { EnrolModel } from '../Models/app.EnrolModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editenrol',
  templateUrl: './editenrol.component.html',
  styleUrls: ['./editenrol.component.scss']
})
export class EditenrolComponent implements OnInit {
  private _enrolService;
  SectionList: SectionModel[];
  StudentList: StudentModel[];
  enrolModel: EnrolModel = new EnrolModel();
  private _allStudent : Observable<StudentModel[]>;
  private _allSection : Observable<SectionModel[]>;
  title = 'Edit Enrolment';
    output: any;
    errorMessage: any;
    EnrolmentID: any;
  constructor(private _Route: Router, private courseService: EnrolService,
    private _routeParams: ActivatedRoute)
  {
    this._enrolService = courseService;
   }
   FillSection()
   {
     this._allSection = this._enrolService.GetAllSectionsEnrols();
   }
   FillCStudent(coursId)
   {
 console.log(coursId);
     this._allStudent = this._enrolService.GetAllStudentsEnrols(coursId);
   }

   ngOnInit():void {
    this.EnrolmentID = this._routeParams.snapshot.params['EnrolmentID'];
    this._enrolService.GetEnrolById(this.EnrolmentID).subscribe(
        course => {
            this.enrolModel = course;
        },
        error => this.errorMessage = <any>error
    );

     this._enrolService.GetAllSectionsEnrols().subscribe(
       allProgram => {
           this.SectionList = allProgram;
       },
       error => this.errorMessage = <any>error
   );
   this._enrolService.GetAllStudentsEnrols(0).subscribe(
     allProgram => {
         this.StudentList = allProgram;
     },
     error => this.errorMessage = <any>error
 );
    // this.FillSection();
   }

      onSubmit() {


        this._enrolService.UpdateEnrol(this.enrolModel).subscribe(
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
                this._Route.navigate(['Coordinator/Enrolment']);
            }
            else {
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Error ',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    }

}
