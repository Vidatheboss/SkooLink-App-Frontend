import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InboxService } from '../../services/inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {

  message: string = '';
  subject: string = '';
  date: string='';
 
 // idMessage: number=0;
  answer = '';
  public id: any;
  public messages:any;

  displayedColumns: string[] = ['message', 'subject','date', 'details'];


  constructor(private route: ActivatedRoute, private inboxService: InboxService, private router: Router){
    this.id = route.snapshot.paramMap.get('id');
   // this.getStat(this.id,1);
    this.inboxService.getMessage(this.id).subscribe((response)=>{

      this.messages  = response;
       console.log(this.messages);
    },(error=>{

    }));


  }


  getStat(stid:any,stat:any){
    //console.log(stat);

    this.inboxService.getStat(stid,stat).subscribe((response)=>{

      this.messages = response;
     },(error=>{

    }));
  }
    goToNewPage() {
    this.router.navigate(['/compose']);
    }

    updateMessage(id:any){
      let data = {
        id: id
      }

      this.inboxService.updateMessage(data).subscribe();
    }

   


}

