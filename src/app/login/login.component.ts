import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth : Login;
  user : User;
  constructor(private router : Router , private service : UserService) {
    this.auth=new Login();
    this.user=new User();
   }

  ngOnInit(): void {
  }

  authenticate()
  {
    this.service.validateLogin(this.auth.emailId,this.auth.password).subscribe((data : User)=>{
    this.user=data;
    //alert(this.user);
    if(this.user != null) {
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/seat']);
    } else
      alert("Invalid User ID/Password");
    
  });
   
  }
}
