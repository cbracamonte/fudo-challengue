import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Country } from '../../enums/country.enum';
import { News } from '../../models/news.model';
import { Observable, finalize, of } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news$: Observable<News> = of({} as News);

  country = Country.US;
  loading = true;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNewsService();
  }

  getNewsService() {
    this.news$ = this.newsService
      .getNews(this.country)
      .pipe(finalize(() => (this.loading = false)));
  }
}
