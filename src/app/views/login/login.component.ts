import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './Models/app.LoginModel';
import { LoginService } from './Services/app.LoginService';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent  implements OnInit
{

    ngOnInit(): void {
        localStorage.clear();
    }
    private _loginservice;
    output: any;

    actionButtonLabel: string = 'Retry';
    action: boolean = false;
    setAutoHide: boolean = true;
    autoHide: number = 2000;
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';


    constructor(private _Route: Router,public snackBar: MatSnackBar, loginservice: LoginService)
    {
        this._loginservice = loginservice;
    }

    LoginModel: LoginModel = new LoginModel();

    onSubmit()
    {
      console.log('hello');
        this._loginservice.validateLoginUser(this.LoginModel).subscribe(
            response =>
            {
              console.log(response.UserType);
                if (response.Token == null && response.Usertype == "0")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Invalid Username and Password", this.action ? this.actionButtonLabel : undefined, config);

                    this._Route.navigate(['login']);
                }

                if (response.Usertype == "1")
                { console.log('admin block');
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully Admin", this.action ? this.actionButtonLabel : undefined,
                    {
                      duration: 2000,
                      // here specify the position
                      verticalPosition: 'bottom'
                    });

                    this._Route.navigate(['/Admin/AdminDashboard']);
                }
                if (response.Usertype == "2")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully Student", this.action ? this.actionButtonLabel : undefined, config);
                    this._Route.navigate(['/Student/StudentDashboard']);
                }
                if (response.Usertype == "3")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully Teacher", this.action ? this.actionButtonLabel : undefined, config);
                    this._Route.navigate(['/Teacher/TeacherDashboard']);
                }
                if (response.Usertype == "4")
                {
                  console.log('coordinaor block ');
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully Coordinator", this.action ? this.actionButtonLabel : undefined,
                    {
                      duration: 2000,
                      // here specify the position
                      verticalPosition: 'bottom'
                    });

                    this._Route.navigate(['/Coordinator/CoordinatorDashboard']);
                }
            });

    }
}
