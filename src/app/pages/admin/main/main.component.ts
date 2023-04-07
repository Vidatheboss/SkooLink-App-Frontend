import { Component } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public users: any;
  displayedColumns: string[] = ['username','email', 'name', 'id'];
  constructor(private userService: UserService) {

    this.userService.getUsers().subscribe((response)=>{
      this.users = response;
      // console.log(this.users);
    },(error=>{
      console.log(error)
    }));
  }

  deleteRecord(id: any, role: any){
    this.userService.deleteUser(id, role).subscribe();
    window.location.reload();
  }
}
