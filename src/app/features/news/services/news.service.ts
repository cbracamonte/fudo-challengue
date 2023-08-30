import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { News } from '../models/news.model';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../enums/country.enum';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private HttpService: HttpService) {}

  getNews(country: Country): Observable<News> {
    return this.HttpService.get<News>(country).pipe(
      catchError(() => {
        return of({} as News);
      })
    );
  }
}
