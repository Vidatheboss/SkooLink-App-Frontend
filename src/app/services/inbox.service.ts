import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  apiUrlGetMessage = environment.apiUrl + '/inbox/messages'

  constructor(private httpClient:HttpClient){
  }

  getMessage(id:any){
    let API_URL = `${this.apiUrlGetMessage}`;

    return this.httpClient.get<JSON>(API_URL+'/'+id) 
  }



}

