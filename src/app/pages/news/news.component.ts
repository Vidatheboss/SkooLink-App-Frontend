import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService} from '../../services/news.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
   
})
export class NewsComponent implements OnInit{
  new: string = '';
  answer = '';
  public news: any;
  public category:any;

  
public value: string ='';
  displayedColumns: string[] = ['category','description'];

  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router){

       this.getNews(this.answer);
     

  }
  

  getNews(category:any){
    console.log(category);

    this.newsService.getNews(category).subscribe((response)=>{

      this.news = response;
     },(error=>{

    }));
  }

 


}