import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  apiUrlSupportMessage = environment.apiUrl + '/support'

  constructor(private httpClient:HttpClient){

  }

  postSupportMessage(data: any){
    let API_URL = `${this.apiUrlSupportMessage}`;

    return this.httpClient.post<JSON>(API_URL, data);
  }

  // postSupportMessage(data: any){
  //   return this.httpClient.post(this.apiUrlGetMedical, data);
  // }

}
