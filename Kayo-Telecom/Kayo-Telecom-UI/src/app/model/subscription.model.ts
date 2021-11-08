import { Device } from "./device.model";
import { Plan } from "./plan.model";
import { User } from "./user.model";

export class Subscription {
    id: number = 0;
    planId: number;
    userId: number;
    devices: Device[];
    plan: Plan;

    constructor(id: number,planId: number, userId:number, devices: Device[], plan: Plan){
        this.id = id;
        this.planId = planId;
        this.userId = userId;
        this.devices = devices;
        this.plan = plan;
    }
}
