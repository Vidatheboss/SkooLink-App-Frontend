import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  signup(data:any){
    return this.httpClient.post(this.url +
    "/users/signup", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  login(data: any){
    return this.httpClient.post(this.url +
    "/users/login", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  checkToken(){
    return this.httpClient.get(this.url + "/users/checkToken")
  }

  getUsers(){
    let API_URL = `${this.url}/users/getUsers`;
    return this.httpClient.get<JSON>(API_URL);
  }

  deleteUser(id: any, role: any){
    let API_URL = `${this.url}/users/delete/${id}/${role}`;
    return this.httpClient.delete<JSON>(API_URL);
  }

  addUser(data: any){
    return this.httpClient.post(this.url +
      "/users/create", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  editUser(data: any){
    return this.httpClient.put(this.url +
      `/users/edit/${data.id}/${data.role}`, data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getOneUser(id: any, role: any){
    let API_URL = `${this.url}/users/getOneUser/${id}/${role}`;

    return this.httpClient.get<JSON>(API_URL);
  }
}
