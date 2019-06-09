import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './Models/app.LoginModel';
import { LoginService } from './Services/app.LoginService';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition,
   MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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

                if (response.Usertype == "91")
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

                    this._Route.navigate(['/admin']);
                }

                if (response.Usertype == "312")
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;

                    this.snackBar.open("Logged in Successfully", this.action ? this.actionButtonLabel : undefined, config);
                    this._Route.navigate(['/User/Dashboard']);
                }
                if (response.Usertype == "341")
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

                    this._Route.navigate(['/coordinator']);
                }
            });

    }
}