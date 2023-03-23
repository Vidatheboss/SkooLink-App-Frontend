import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrlGetNews = environment.apiUrl + '/news'

  constructor(private httpClient:HttpClient){

  }

  getNews(student: any){
    let API_URL = `${this.apiUrlGetNews}/get`;

    return this.httpClient.get<JSON>(API_URL);
  }

  
}
