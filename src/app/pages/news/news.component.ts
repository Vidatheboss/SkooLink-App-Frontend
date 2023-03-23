import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

    public news: any;
    public category: any;
    

    displayedColumns: string[] = ['grade'];

    constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router){
            
        this.newsService.getNews().subscribe((response)=>{
               this.news = response;
               console.log(this.news);
    

        },(error=>{
    
        }));
    
    }

}