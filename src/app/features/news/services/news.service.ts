import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { News } from '../models/news.model';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../enums/country.enum';
import * as news from '../../../../assets/data/news.json';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpService: HttpService) {}

  getNews(country: Country): Observable<News> {
    return this.httpService.get<News>(country).pipe(
      catchError(() => {
        return of(news as News);
      })
    );
  }
}
