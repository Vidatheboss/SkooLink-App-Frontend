import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  apiUrlGetMessage = environment.apiUrl + '/inbox/messages'
  apiUrlInsertMessage = environment.apiUrl + '/inbox/compose'

  constructor(private httpClient:HttpClient){
  }

  getMessage(id:any){
    let API_URL = `${this.apiUrlGetMessage}`;

    return this.httpClient.get<JSON>(API_URL+'/'+id) 
  }

  insertMessage(data: any){
    return this.httpClient.post(this.apiUrlInsertMessage, data)
  }

}

