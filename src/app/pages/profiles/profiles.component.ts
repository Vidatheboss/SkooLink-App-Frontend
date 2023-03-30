import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent{

  //public id: any;
  public studentstable:any;

  displayedColumns: string[] = ['student_id','name','detais'];


  constructor(private route: ActivatedRoute, private profilesService: ProfilesService, private router: Router){
    
    this.profilesService.getStudents().subscribe((response)=>{
      
      this.studentstable  = response;
       console.log(this.studentstable);

    },(error=>{

    }));

    
  }

}
