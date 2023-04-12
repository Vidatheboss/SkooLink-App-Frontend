import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  public id: any;
  public role: any;
  public username: any;
  public email: any;
  public roleName: any;
  public fullName: any;
  composeForm: any = FormGroup;

  ngOnInit(): void {
    this.composeForm = this.formBuilder.group({
      updatedUsername: [null],
      updatedPassword: [null],
      updatedFullName: [null]
    })
  }

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    this.role = route.snapshot.paramMap.get('role');

    this.userService.getOneUser(this.id, this.role).subscribe((response) => {
      let result: any = response;

      this.username = result[0].username;
      this.email = result[0].email;
      this.roleName = result[0].name;
      this.fullName = result[0].fullName;
    },(error => {
      console.log(error)
    }));
  }

  updateUser(){
    let formData = this.composeForm.value;
    let data = {
      username: formData.updatedUsername,
      password: formData.updatedPassword,
      fullName: formData.updatedFullName,
      id: this.id,
      role: this.role
    }
    console.log(data)

    this.userService.editUser(data).subscribe((response: any) =>{
      this.router.navigate(['/admin/main'])
    });
  }
  returnAdminPage(){
    this.router.navigate(['/admin/main'])
  }
}
