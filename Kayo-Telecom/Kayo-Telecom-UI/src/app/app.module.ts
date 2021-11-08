import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import localeko from '@angular/common/locales/ko';
registerLocaleData(localeko);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PurchaseplanComponent } from './purchaseplan/purchaseplan.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AddDeviceComponent } from './add-device/add-device.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserinfoComponent,
    PurchaseplanComponent,
    MyaccountComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    EditDeviceComponent,
    AddDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'ko'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
