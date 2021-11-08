import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PurchaseplanComponent } from './purchaseplan/purchaseplan.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HomeComponent } from './home/home.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AddDeviceComponent } from './add-device/add-device.component';

const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'userinfo', component: UserinfoComponent },
{ path: 'purchaseplan', component: PurchaseplanComponent },
{ path: 'myaccount', component: MyaccountComponent },
{ path: 'editdevice', component: EditDeviceComponent},
{ path: 'createdevice',component: AddDeviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
