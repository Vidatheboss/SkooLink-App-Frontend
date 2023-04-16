import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  apiUrlGetMessage = environment.apiUrl + '/inbox/messages'
  apiUrlInsertMessage = environment.apiUrl + '/inbox/compose'
  apiUrlFilterMessage = environment.apiUrl + '/inbox/inbox-filter'
  apiUrlUpdateMessage = environment.apiUrl + '/inbox/statupdate'
  apiUrlStatMessage = environment.apiUrl + '/inbox/stat'

  constructor(private httpClient:HttpClient){
  }

  getMessage(id:any){
    let API_URL = `${this.apiUrlGetMessage}`;

    return this.httpClient.get<JSON>(API_URL+'/'+id) 
  }

  filterMessage(id:any){
    let API_URL = `${this.apiUrlFilterMessage}`;

    return this.httpClient.get<JSON>(API_URL+'/'+id) 
  }
  
  updateMessage(data: any){
    return this.httpClient.post(this.apiUrlUpdateMessage, data);
  }


  insertMessage(data: any){
    return this.httpClient.post(this.apiUrlInsertMessage, data)
  }

  getStat(stid:any,stat: any){
    let API_URL = `${this.apiUrlStatMessage}/${stid}/${stat}`;

    return this.httpClient.get<JSON>(API_URL);
  }

}

