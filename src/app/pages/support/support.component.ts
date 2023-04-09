import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SupportService } from '../../services/support.service';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  supportForm: any = FormGroup;

     //Getting the account id
    private id = localStorage.getItem('id');


  constructor(private router: Router, private formBuilder: FormBuilder, private supportService:  SupportService) {
  }

  ngOnInit() {
    this.supportForm = this.formBuilder.group({
      subjectLine: [null],
      description: [null]
    })

  }

  insertMessage(){
    let formData = this.supportForm.value;
    let data = {
      subjectLine: formData.subjectLine,
      description: formData.description,
      userId: this.id
    }
    //Checking what kind of data I am passing inside the data.
    console.log(data);

    this.supportService.postSupportMessage(data).subscribe((response:any) =>{
      this.router.navigate(['/home'])
    });

  }

}


