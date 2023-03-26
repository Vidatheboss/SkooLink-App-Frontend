import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {SnackbarService} from "../../services/snackbar.service";
import {GlobalConstants} from "../../shared/global-constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  respondMessage: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    // private snackbarService: SnackbarService
  ) { }

  username: string | undefined;
  password: string | undefined;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, Validators.required]
      })
  }

  handleSubmit(){
    let formData = this.loginForm.value;
    let data = {
      email: formData.email,
      password: formData.password
    }
    
    this.userService.login(data).subscribe((response: any) =>{
      localStorage.setItem('token', response.token);
      localStorage.setItem('id', response.id);

      this.router.navigate(['/dashboard'])
    },(error) => {
      if (error.error?.message) {
        this.respondMessage = error.error?.message;
      } else {
        this.respondMessage = GlobalConstants.genericError;
      }
      // this.snackbarService.openSnackBar(this.respondMessage, GlobalConstants.error);
    })
  }

  signIn(): void {
    this.router.navigate(['/signup']);
  }
}
