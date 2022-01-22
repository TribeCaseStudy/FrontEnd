import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  user : User;
  nextPage:string;
  constructor(private router: Router, private service : UserService) {
    this.user=new User();
    this.nextPage=JSON.parse(localStorage.getItem("nextPage")||"{}");
    if(JSON.stringify(this.nextPage)=="{}")
    {
      this.nextPage="seat";
    }
   }

  ngOnInit(): void {
  }

  register()
  {
    this.service.createUser(this.user);
    localStorage.setItem("user",JSON.stringify(this.user));
    this.router.navigate(['/'+this.nextPage]);
    localStorage.removeItem("nextPage");
  }

}
