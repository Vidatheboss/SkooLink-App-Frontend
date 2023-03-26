import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InboxService } from 'src/app/services/inbox.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit{
  composeForm: any = FormGroup;
  constructor (private inboxService: InboxService, private router: Router, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.composeForm = this.formBuilder.group({
      senderEmail:[null],
      recipientEmail: [null],
      subjectLine:[null],
      description: [null]
      })
  }

  insertMessage(){
    let formData = this.composeForm.value;
    let data = {
      senderEmail: formData.senderEmail,
      recipientEmail: formData.recipientEmail,
      subjectLine: formData.subjectLine,
      description: formData.description
    }

    this.inboxService.insertMessage(data).subscribe((response:any) =>{
      this.router.navigate(['/home'])
    });
  }
}
