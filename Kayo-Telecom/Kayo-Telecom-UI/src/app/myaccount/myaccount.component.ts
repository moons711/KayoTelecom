import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../model/device.model';
import { Plan } from '../model/plan.model';
import { Subscription } from '../model/subscription.model';
import { SubscriptionService } from '../services/subscription.service';
import { PlanService } from '../services/plan.service';
import { DeviceService } from '../services/device.service';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  subscriptions: Subscription[] = [];
  plans: Plan[] = [];
  devices: Device[] = [];
  bill: number = 0;

  constructor(private router:Router,
              private subService:SubscriptionService,
              private planService:PlanService,
              private deviceService:DeviceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('loggedOn') == 'true'){
      var uid = localStorage.getItem('userID') || 0;
      this.subService.find(+uid).subscribe(subs => {
        this.subscriptions = subs;

        for (let i = 0; i < this.subscriptions.length; i++)
        {
          this.planService.find(this.subscriptions[i].planId).subscribe(plan => {
            this.subscriptions[i].plan = plan;
            this.bill += plan.price;
          });

          this.deviceService.find(this.subscriptions[i].id).subscribe(dev => {
            this.subscriptions[i].devices = dev;
          });
        }
      })
    }
    document.body.style.background = "#f4faff";
  }

  placeDevice(dev:Device, )
  {
    localStorage.setItem('deviceId',dev.id.toString());
    localStorage.setItem('deviceHolder',dev.deviceHolder.toString());
    localStorage.setItem('deviceName',dev.deviceName.toString());
    localStorage.setItem('phoneNumber',dev.phoneNumber.toString());
    localStorage.setItem('subscriptionId',dev.subscriptionId.toString());

  }

  createDevice(subId:number)
  {
    localStorage.setItem('subscriptionId',subId.toString());
  }

  deleteDevice(deviceID: number){

    this.deviceService.remove(deviceID).subscribe( del => {
      location.reload();
    });


  }

  deleteSub(subid: number){

    for (let i = 0; i < this.subscriptions[subid].devices.length; i++)
    {

    this.deviceService.remove(this.subscriptions[subid].devices[i].id).subscribe();


  }
  this.subService.remove(this.subscriptions[subid].id).subscribe( del => {
    location.reload();
  });

}
}
