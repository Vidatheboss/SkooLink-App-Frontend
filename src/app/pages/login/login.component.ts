import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  username: string | undefined;
  password: string | undefined;

  ngOnInit() {
  }

  login(): void {

  }

  signIn(): void {
    this.router.navigate(['/signup']);
  }
}
