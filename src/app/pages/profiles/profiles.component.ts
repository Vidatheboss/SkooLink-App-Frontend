import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent{

  name: string ='';
  prescription: string = '';
  medical_information: string = '';
  user_id: string='';

  //public id: any;
  public studentstable:any;

  displayedColumns: string[] = ['user_id','name','prescription','medical_information'];


  constructor(private route: ActivatedRoute, private profilesService: ProfilesService, private router: Router){
   // this.id = route.snapshot.paramMap.get('id');
    
    this.profilesService.getStudents().subscribe((response)=>{
      
      this.studentstable  = response;
       console.log(this.studentstable);

    },(error=>{

    }));

    
  }

}
