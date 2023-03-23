import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

    course: string = '';
    grade: string = '';

    public grades: any;

    displayedColumns: string[] = ['grade'];

}