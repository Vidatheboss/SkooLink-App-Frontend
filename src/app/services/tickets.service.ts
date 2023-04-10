import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class TicketsService {
    apiUrlGetTickets = environment.apiUrl + '/support/tickets'
  
    constructor(private httpClient:HttpClient){
  
    }
  
    getTickets(){
      let API_URL = `${this.apiUrlGetTickets}`;
  
      return this.httpClient.get<JSON>(API_URL);
    }
  
    
  }