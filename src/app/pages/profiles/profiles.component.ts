import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent{

  public studentstable:any;
  public searchStudent:any;

  displayedColumns: string[] = ['student_id','name','details'];


  constructor(private route: ActivatedRoute, private profilesService: ProfilesService, private router: Router){
    this.getStudent("");
  }

  getStudent(student: string){
    if(student === "" || student === undefined){
      this.profilesService.getStudents().subscribe((response)=>{
        this.studentstable  = response;
      },(error=>{
  
      }));
    } 
    else{
      this.profilesService.getStudent(student).subscribe((response)=>{
        this.studentstable  = response;
      },(error=>{
  
      }));
    }
  }

}
