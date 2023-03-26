import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  apiUrlGetStudentts = environment.apiUrl+ '/studentts/students'

  constructor(private httpClient:HttpClient){
  }

  getStudents(){
    let API_URL = `${this.apiUrlGetStudentts}`;

    return this.httpClient.get<JSON>(API_URL) 
  }



}

