import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User("","","","");

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    document.body.style.background = "#f4faff";
  }

  save(): void {
    this.userService.save(this.newUser).subscribe(data => {
      let route = this.router.config.find(r => r.path ==='login');
      if(route){
        this.router.navigateByUrl('/login');
      }
    })
  }

}
