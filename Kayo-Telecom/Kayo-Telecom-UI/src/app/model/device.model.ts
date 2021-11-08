import { Subscription } from "./subscription.model";

export class Device {
    id: number = 0;
    subscriptionId: number;
    deviceName: string;
    deviceHolder: string;
    phoneNumber: string;

    constructor(subscriptionId: number, deviceName: string, deviceHolder: string, phoneNumber: string){
        this.subscriptionId = subscriptionId;
        this.deviceName = deviceName;
        this.deviceHolder = deviceHolder;
        this.phoneNumber = phoneNumber;
    }
}
