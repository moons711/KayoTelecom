import { Subscription } from "./subscription.model";

export class User {

    id: number = 0;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    subscription: Subscription[] = [];

    constructor(firstName: string, lastName: string, email: string, password:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


}
