import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { Country } from 'src/app/features/news/enums/country.enum';
describe('HttpService', () => {
  let httpService: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });
    httpService = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(httpService).toBeTruthy();
  });

  it('should make a GET request with the correct parameters', () => {
    const country = Country.US;
    const apiUrl = 'https://example.com/';

    httpService.get<any>(country).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(
      `${apiUrl}top-headlines?country=${country}`
    );
    expect(req.request.method).toBe('GET');

    req.flush({});
  });
});
