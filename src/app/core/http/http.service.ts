import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Country } from 'src/app/features/news/enums/country.enum';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.url;
  private pathTopHeadlines = 'top-headlines';
  constructor(private http: HttpClient) {}

  get<T>(country: Country): Observable<T> {
    const params = {
      country,
    };
    return this.http.get<T>(`${this.apiUrl}${this.pathTopHeadlines}`, {
      params,
    });
  }
}
