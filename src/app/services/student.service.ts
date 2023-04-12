import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrlGetStudent = environment.apiUrl + '/students'
  apiUrlGetMedical = environment.apiUrl + '/medical-info'
  apiUrlPostGrade = this.apiUrlGetStudent + '/grades'
  apiUrlEditGrade = this.apiUrlPostGrade + '/edit'

  constructor(private httpClient:HttpClient){

  }

  getStudent(student: any){
    let API_URL = `${this.apiUrlGetStudent}/profile/${student}`;

    return this.httpClient.get<JSON>(API_URL);
  }

  getStudentGrade(student: any){
    let API_URL = `${this.apiUrlGetStudent}/profile/${student}/grades`;

    return this.httpClient.get<JSON>(API_URL);
  }

  postStudentGrade(data: any){
    return this.httpClient.post(this.apiUrlPostGrade, data);
  }

  deleteStudentGrade(grade: any){
    let API_URL = `${this.apiUrlPostGrade}/${grade}`;

    return this.httpClient.delete(API_URL);
  }

  editStudentGrade(data: any){
    return this.httpClient.post(this.apiUrlEditGrade, data);
  }

  getStudentMedical(student: any){
    let API_URL = `${this.apiUrlGetMedical}/${student}`;

    return this.httpClient.get<JSON>(API_URL);
  }

  deleteStudentMedical(id: any){
    let API_URL = `${this.apiUrlGetMedical}/${id}`;

    return this.httpClient.delete(API_URL);
  }

  postStudentMedical(data: any){
    return this.httpClient.post(this.apiUrlGetMedical, data);
  }

  editStudentMedical(data: any){
    let API_URL = `${this.apiUrlGetMedical}/edit`;

    return this.httpClient.post(API_URL, data);
  }
  
}
