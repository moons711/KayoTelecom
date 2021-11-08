import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedin: boolean = false;
  username: string ="";
  password: string ="";

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    document.body.style.background = "#f4faff";
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(data => {
      if(data != -1){
        localStorage.setItem('loggedOn', 'true');
        localStorage.setItem('userID',data.toString());
        this.router.navigateByUrl('/').then(() => {
          window.location.reload();
        });
      } else {
        localStorage.setItem('loggedOn','false');
        alert("Incorrect Username or Password");
        window.location.reload();
      }
    });
  }

}
