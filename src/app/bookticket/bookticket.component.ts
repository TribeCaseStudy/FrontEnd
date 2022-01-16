import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { User } from '../user.model';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  user:User;
  movie:Movie;
  constructor(private router:Router) {
    this.user=new User();
    this.movie=new Movie();
   }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user')||"{}");
    this.movie=JSON.parse(localStorage.getItem('movie')||"{}");
  }

  transmit()
  {
    this.router.navigate(['/payment']);
  }

}
