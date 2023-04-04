import { Component } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private userService: UserService, private router: Router) {

  }

  returnAdminPage(){
    this.router.navigate(['/admin/main'])
  }
}
