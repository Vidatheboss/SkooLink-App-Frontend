import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  new: string = '';

  public news: any;
  

  displayedColumns: string[] = ['category','description'];

  ngOnInit(): void {
    // if(this.permission == 1) this.displayedColumns.splice(2, 1);
  }

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router){
          
      this.newsService.getNews().subscribe((response)=>{
              this.news = response;
              console.log(this.news);
      },(error=>{
  
      }));
  
  }

}