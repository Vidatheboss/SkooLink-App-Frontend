import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InboxService } from '../../services/inbox.service';


@Component({
  selector: 'app-inbox-filter',
  templateUrl: './inbox-filter.component.html',
  styleUrls: ['./inbox-filter.component.css']
})
export class InboxFilterComponent {
  message: string = '';
  subject: string = '';
  date: string='';

  public id: any;
  public messages:any;

  displayedColumns: string[] = ['message', 'subject','date'];


  constructor(private route: ActivatedRoute, private inboxService: InboxService, private router: Router){
    this.id = route.snapshot.paramMap.get('id');

    this.inboxService.filterMessage(this.id).subscribe((response)=>{

      this.messages  = response;
       console.log(this.messages);

    },(error=>{
    }));
  }

  back(){
    this.router.navigate(['/inbox/'+localStorage.getItem('id')])
  }
}
