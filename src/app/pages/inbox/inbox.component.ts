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

  public id: any;
  public messages:any;

  displayedColumns: string[] = ['message', 'subject','date'];


  constructor(private route: ActivatedRoute, private inboxService: InboxService, private router: Router){
    this.id = route.snapshot.paramMap.get('id');

    this.inboxService.getMessage(this.id).subscribe((response)=>{

      this.messages  = response;
       console.log(this.messages);
      //this.message = result[0].message;
    },(error=>{

    }));


  }
}

