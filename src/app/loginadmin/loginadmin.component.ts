import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { Login } from '../model/login.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  auth : Login;
  admin : Admin;
  constructor(private router : Router,private service : AdminService) {
    this.auth=new Login();
    this.admin=new Admin();
   }

  ngOnInit(): void {
  }


  authenticate()
  {
    this.service.validateLogin(this.auth.emailId,this.auth.password).subscribe((data: Admin)=>{
    this.admin=data;
    //alert(this.user);
    if(this.admin != null) {
      this.router.navigate(['/list']);
    } else
      alert("Invalid User ID/Password");
    
  });
   
  }
}
