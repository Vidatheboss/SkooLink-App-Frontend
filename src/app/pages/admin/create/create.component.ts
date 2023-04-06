import {Component, OnInit} from '@angular/core';
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  composeForm: any = FormGroup;

  ngOnInit(): void {
    this.composeForm = this.formBuilder.group({
      newUsername:[null],
      newEmail: [null],
      newPassword:[null],
      newRole: [null]
    })
  }

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {

  }

  insertUser(){
    let formData = this.composeForm.value;
    let data = {
      username: formData.newUsername,
      email: formData.newEmail,
      password: formData.newPassword,
      role: formData.newRole
    }

    this.userService.addUser(data).subscribe((response:any) =>{
      this.router.navigate(['/admin/main'])
    });
  }

  returnAdminPage(){
    this.router.navigate(['/admin/main'])
  }
}
