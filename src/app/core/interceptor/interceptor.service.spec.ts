import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { environment } from 'src/environments/environment';

describe('InterceptorService', () => {
  let interceptor: InterceptorService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        InterceptorService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.inject(InterceptorService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add the apikey parameter to the request', () => {
    const apiKey = environment.apiKey;
    const url = 'https://example.com/api';
    const dummyData = { data: 'test' };

    httpClient.get(url).subscribe(data => {
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne(`${url}?apikey=${apiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});
