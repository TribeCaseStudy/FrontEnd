import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../service/user.service';
import { Login } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth : Login;
  user : User;
  nextPage:string;
  constructor(private router : Router , private service : UserService) {
    this.auth=new Login();
    this.user=new User();
    this.nextPage=JSON.parse(localStorage.getItem("nextPage")||"{}");
   }

  ngOnInit(): void {
    localStorage.removeItem("show");
    localStorage.removeItem("finalSeats");
  }

  authenticate()
  {
    this.service.validateLogin(this.auth.emailId,this.auth.password).subscribe((data : User)=>{
    this.user=data;
    //alert(this.user);
    if(this.user != null) {
      localStorage.setItem('user', JSON.stringify(this.user));
      if(JSON.stringify(this.nextPage)=="{}")
      {
        this.nextPage="seat";
      }
      this.router.navigate(['/'+this.nextPage]);
      localStorage.removeItem("nextPage");
    } else
      alert("Invalid User ID/Password");
    
  });
   
  }
}
