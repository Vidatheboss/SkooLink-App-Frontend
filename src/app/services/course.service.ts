import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrlGetCourses = environment.apiUrl + '/courses'

  constructor(private httpClient:HttpClient){

  }

  getCourses(){
    let API_URL = `${this.apiUrlGetCourses}`;

    return this.httpClient.get<JSON>(API_URL);
  }
}
