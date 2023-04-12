import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  id = localStorage.getItem('id');

  isAdmin(): boolean{
    const role = localStorage.getItem('role');
    return role === '5';
  }

  hasStudentAccess(): boolean {
    const role = localStorage.getItem('role');
    return role === '2' || role === '3';
  }
}

