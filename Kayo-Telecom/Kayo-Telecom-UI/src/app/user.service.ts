import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //URL needs to change for the backend API
  url = 'https://kayo-telecom-service.azurewebsites.net/WeatherForecast';

  constructor(private httpClient: HttpClient) { }
}
