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
  constructor(private router: Router, private service : UserService) {
    this.user=new User();
   }

  ngOnInit(): void {
  }

  register()
  {
    this.service.createUser(this.user);
    this.router.navigate(['/home']);
  }

}
