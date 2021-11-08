import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from '../model/device.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  newDevice:Device = new Device(0,'','','');
  deviceForm = this.fb.group({
    deviceName: ['', Validators.required],
    deviceHolder: ['', Validators.required],
    phoneNumber: [''],
    noNumber: ['']
  });

  constructor(private router: Router, private deviceService:DeviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    document.body.style.background = "#f4faff";
    var subId = localStorage.getItem('subscriptionId') || 0;
    this.newDevice.subscriptionId = +subId;
  }

  save(): void {
    this.newDevice.deviceHolder = this.deviceForm.get('deviceHolder')?.value;
    this.newDevice.deviceName = this.deviceForm.get('deviceName')?.value;
    var numberExist = this.deviceForm.get('noNumber')?.value;

    console.warn(numberExist);
    if (numberExist == true){
      this.newDevice.phoneNumber = '-1';
    } else {
      this.newDevice.phoneNumber = this.deviceForm.get('phoneNumber')?.value;
    }

    this.deviceService.save(this.newDevice).subscribe(res => {
      this.router.navigateByUrl('myaccount').then(()=>{
        window.location.reload();
      })
    });

  }

}
