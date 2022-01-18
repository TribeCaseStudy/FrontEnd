import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { Seat } from '../seat.model';
import { ShowScreen } from '../showScreen.model';
import { User } from '../user.model';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  user:User;
  movie:Movie;
  show:ShowScreen;
  finalSeats:Seat[]=[];
  constructor(private router:Router) {
    this.user=JSON.parse(localStorage.getItem('user')||"{}");
    this.movie=JSON.parse(localStorage.getItem('movie')||"{}");
    this.show=JSON.parse(localStorage.getItem("show")||"{}");
    this.finalSeats=JSON.parse(localStorage.getItem("finalSeats")||"{}");

   }

  ngOnInit(): void {
  }

  transmit()
  {
    this.router.navigate(['/payment']);
  }

}
