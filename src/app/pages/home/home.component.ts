import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userServices: UserService
    ) {
  }
  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.userServices.checkToken().subscribe((response: any) => {
        this.router.navigate(['/home']);
      },(error: any) => {
        console.log(error);
      })
    }
  }

}
