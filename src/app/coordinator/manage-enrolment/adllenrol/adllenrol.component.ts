import { EnrolModel } from './../Models/app.EnrolModel';
import {SectionModel } from '../../manage-section/Models/app.SectionModel';
import { StudentModel } from './../../manage-student/Model/app.StudentModel';
import { EnrolService } from './../Service/app.enrolment.Service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adllenrol',
  templateUrl: './adllenrol.component.html',
  styleUrls: ['./adllenrol.component.scss']
})
export class AdllenrolComponent implements OnInit {

  private _enrolService;
  SectionList: SectionModel[];
  StudentList: StudentModel[];
  private _allStudent : Observable<StudentModel[]>;
  private _allSection : Observable<SectionModel[]>;
  enrolModel: EnrolModel = new EnrolModel();
  title = 'Add Enrolment';
  output: any;
  errorMessage: any;
  constructor(private _Route: Router, private enrolService: EnrolService) {
    this._enrolService = enrolService;
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
console.log(this.enrolModel);


    this._enrolService.AddEnrol(this.enrolModel).subscribe(
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
            title: ' Error',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  }

}
