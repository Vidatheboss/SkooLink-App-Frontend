import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  apiUrlGetNurse = environment.apiUrl + '/nurses'

  constructor(private httpClient:HttpClient) { }

  getNurse(nurse: any){
    let API_URL = `${this.apiUrlGetNurse}/${nurse}`;
    
    return this.httpClient.get<JSON>(API_URL);
  }
}
