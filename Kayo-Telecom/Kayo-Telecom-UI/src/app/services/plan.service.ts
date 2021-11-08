import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../model/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = 'https://kayo-telecom-service.azurewebsites.net/api/Plans';

  constructor(private httpClient: HttpClient) { }

  findAll():Observable<Plan[]> {

    return this.httpClient.get<Plan[]>(this.url);
  }

  find(plan: number): Observable<Plan> {
    return this.httpClient.get<Plan>(this.url + `/${plan}`);
  }

  putPlan(plan: Plan): Observable<number> {
    return this.httpClient.put<number>(this.url + `/${plan.id}`,plan);
  }

  save(plan: Plan): Observable<number> {
    return this.httpClient.post<number>(this.url, plan);
  }

  remove(plan: Plan): Observable<number> {
    return this.httpClient.delete<number>(this.url + `/${plan.id}`);
  }
}
