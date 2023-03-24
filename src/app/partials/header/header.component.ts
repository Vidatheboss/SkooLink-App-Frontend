import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private  router: Router) {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }

  isLoggedIn(): boolean{
    const token = localStorage.getItem('token');
    console.log(token)
    if (token != null){
      return true;
    } else {
      return false;
    }
  }
}
