import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../model/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = 'https://kayo-telecom-service.azurewebsites.net/api/devices';

  constructor(private httpClient: HttpClient) { }

  find(deviceId:number):Observable<Device[]> {
    return this.httpClient.get<Device[]>(this.url + `/${deviceId}`);
  }

  save(device:Device):Observable<number> {
    return this.httpClient.post<number>(this.url, device);
  }

  putDevice(device:Device):Observable<number> {
    return this.httpClient.put<number>(this.url + `/${device.id}`, device);
  }

  remove(deviceid:number):Observable<number> {
    return this.httpClient.delete<number>(this.url + `/${deviceid}`);
  }
}
