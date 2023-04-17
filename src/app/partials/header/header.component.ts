import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  id = localStorage.getItem('id')
  fullName = localStorage.getItem('fullName')
  role = localStorage.getItem('role')

  constructor(private router: Router) {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  isLoggedIn(): boolean{
    const token = localStorage.getItem('token');

    if (token != null){
      return true;
    } else {
      return false;
    }
  }

  getRoleName(){
    let userRoleName = '';
    if (this.role === '1') {
      userRoleName = 'Student';
    } else if (this.role === '2') {
      userRoleName = 'Teacher';
    } else if (this.role === '3') {
      userRoleName = 'Nurse';
    } else if (this.role === '4') {
      userRoleName = 'Parent';
    } else if (this.role === '5') {
      userRoleName = 'Admin';
    }

    return userRoleName;
  }
}
