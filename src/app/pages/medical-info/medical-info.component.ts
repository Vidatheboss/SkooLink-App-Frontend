import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-medical-info',
  templateUrl: './medical-info.component.html',
  styleUrls: ['./medical-info.component.css']
})
export class MedicalInfoComponent {
  public userId: any = localStorage.getItem('id');
  public studentId: any;
  public studentName: any;
  public dataSource: any;
  public medicalInfo: any;
  public medInfoId: any;
  public nurse: any;
  displayedColumns: string[] = ['date', 'nurse', 'info', 'actions'];

  constructor(private route: ActivatedRoute, private studentService: StudentService, private nurseService: NurseService, private router: Router){
    this.studentId = route.snapshot.paramMap.get('id');

    this.studentService.getStudent(this.studentId).subscribe((response)=>{
      let result: any;
      result = response;

      this.studentName = result[0].name;
    },(error=>{

    }));

    this.studentService.getStudentMedical(this.studentId).subscribe((response)=>{
      this.dataSource = response;
    },(error=>{

    }));

    this.nurseService.getNurse(this.userId).subscribe((response)=>{
      this.nurse = response;
    },(error=>{

    }));
  }

  ifNurse() : boolean{
    if(localStorage.getItem('role') == "3") return true
    else return false
  }

  clearFields(){
    this.medicalInfo = "";
  }

  insertMedInfo(medicalInfo: any){
    console.log(this.nurse);
    let data = {
      id: this.studentId,
      nurseId: this.nurse[0].id,
      description: medicalInfo
    }

    this.studentService.postStudentMedical(data).subscribe();
    window.location.reload();
  }

  loadMedInfo(id: any, medicalInfo: any){
    this.medInfoId = id;
    this.medicalInfo = medicalInfo;
  }

  editMedInfo(id: any, medicalInfo: any){
    let data = {
      id: id,
      description: medicalInfo
    }

    this.studentService.editStudentMedical(data).subscribe();
    window.location.reload();
  }

  deleteMedInfo(id: any){
    this.studentService.deleteStudentMedical(id).subscribe();
    window.location.reload();
  }
}
