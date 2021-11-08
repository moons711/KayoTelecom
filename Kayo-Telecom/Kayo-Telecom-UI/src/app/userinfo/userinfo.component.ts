import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  
  user:User = new User("","","","");

  userForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',Validators.required],
    password:['',Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {    
    this.userService.find(this.getLocalStorageId()).subscribe(data => {
      this.user = data;
      this.userForm = this.fb.group({
        firstName: [this.user.firstName,Validators.required],
        lastName: [this.user.lastName,Validators.required],
        email: [this.user.email,Validators.required],
        password: [this.user.password,Validators.required]
      });
    })
    document.body.style.background = "#f4faff";
  }

  getLocalStorageId() {
    const loggedOn = this.isLogged();
    if(loggedOn == 'true'){
      return JSON.parse(localStorage.getItem('userID') || '{}');
    } else {
      return "nones";
    }
  }

  save(){
    this.user.firstName = this.userForm.get('firstName')?.value;
    this.user.lastName = this.userForm.get('lastName')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.password = this.userForm.get('password')?.value;

    this.userService.putUser(this.user).subscribe( res => {
      this.router.navigateByUrl('/')
        .then(() => {
          window.location.reload();
        });
    });
  }

  isLogged(){
    return localStorage.getItem('loggedOn');
  }
}
