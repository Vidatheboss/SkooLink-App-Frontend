import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  id = localStorage.getItem('id')

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

  getUserId(){

  }
}
