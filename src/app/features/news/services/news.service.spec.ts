import { of, throwError } from 'rxjs';
import { Country } from '../enums/country.enum';
import { News } from '../models/news.model';
import { NewsService } from './news.service';
import { HttpService } from 'src/app/core/http/http.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsService', () => {
  let newsService: NewsService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService, HttpService],
    });
    newsService = TestBed.inject(NewsService);
    httpService = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(newsService).toBeTruthy();
  });

  it('should call HttpService.get with the correct country', () => {
    const httpGetSpy = spyOn(httpService, 'get').and.returnValue(of({}));
    const country = Country.US;
    newsService.getNews(country).subscribe(() => {
      expect(httpGetSpy).toHaveBeenCalledWith(country);
    });
  });

  it('should return an empty News object when HttpService.get fails', () => {
    spyOn(httpService, 'get').and.returnValue(throwError(''));
    const country = Country.US;
    newsService.getNews(country).subscribe((news: News) => {
      expect(news).toEqual({} as News);
    });
  });
});
