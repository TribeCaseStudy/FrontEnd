import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-booking-app';
  user:User;
  constructor(private router:Router)
  {
    this.user=JSON.parse(localStorage.getItem("user")||"{}");
  }

  signout()
  {
    localStorage.removeItem("user");
    this.router.navigate(['/home']);
  }

  nextPage()
  {
    localStorage.setItem("nextPage",JSON.stringify("home"));
    this.router.navigate(['/login']);
  }

  reloadPage()
  {
    window.location.reload();
  }

}
