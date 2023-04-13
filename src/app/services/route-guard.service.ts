import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    public auth: AuthService,
    public router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray = route.data;
    expectedRoleArray = expectedRoleArray['expectedRole'];

    const token: any = localStorage.getItem('token');
    let tokenPayload: any;
    try {
      tokenPayload = jwtDecode(token);
    } catch (err) {
      localStorage.clear();
      this.router.navigate(['/home'])
    }

    let checkRole = false;

    for (let i = 0; i < expectedRoleArray['length']; i++){
      if(expectedRoleArray[i] == tokenPayload.role){
        checkRole = true;
      }
    }

    if (tokenPayload.role == '1' || tokenPayload.role == '2' || tokenPayload.role == '3' || tokenPayload.role == '4' || tokenPayload.role == '5') {
      if (this.auth.isAuthenticated() && checkRole) {
        return true;
      } else {
        this.router.navigate(['/dashboard'])
        return false;
      }
    } else {
      this.router.navigate(['/home']);
      localStorage.clear();
      return false;
    }
  }
}
