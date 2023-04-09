import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  apiUrlGetStudents = environment.apiUrl+ '/students'

  constructor(private httpClient:HttpClient){

  }

  getStudents(){
    return this.httpClient.get<JSON>(this.apiUrlGetStudents) 
  }

  getStudent(student: any){
    return this.httpClient.get<JSON>(`${this.apiUrlGetStudents}/${student}`) 
  }



}

