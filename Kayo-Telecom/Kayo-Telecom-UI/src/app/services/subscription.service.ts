import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from '../model/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  //URL needs to change for the backend API
  url = 'https://kayo-telecom-service.azurewebsites.net/api/Subscriptions';

  constructor(private httpClient: HttpClient) { }

  find(userId:number): Observable<Subscription[]> {
    return this.httpClient.get<Subscription[]>(this.url + `/user/${userId}`);
  }



  putSubscription(subscription: Subscription): Observable<number> {
    return this.httpClient.put<number>(this.url + `/${subscription.id}`, subscription);
  }

  save(userId:number, planId:number): Observable<number> {

    return this.httpClient.post<number>(this.url, {'userId':userId, 'planId':planId});
  }

  remove(subscriptionId: number):Observable<number> {
    return this.httpClient.delete<number>(this.url + `/${subscriptionId}`);
  }
}
