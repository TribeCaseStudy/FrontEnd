import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking.model';
import { Movie } from '../movie.model';
import { Seat } from '../seat.model';
import { BookingService } from '../service/booking.service';
import { ShowScreen } from '../showScreen.model';
import { User } from '../user.model';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  booking:Booking;
  user:User;
  movie:Movie;
  show:ShowScreen;
  finalSeats:Seat[]=[];
  dateToday:number;
  date:string;
  constructor(private router:Router,private bookingService:BookingService) {
    this.dateToday=Date.now();
    this.date=new Date(this.dateToday).getFullYear().toString()+"-"+new Date(this.dateToday).getMonth()+1+"-"+new Date(this.dateToday).getDate();
    this.booking=new Booking(0,"book",new Date(this.date),new Date("0000-00-00"));
    this.user=JSON.parse(localStorage.getItem('user')||"{}");
    this.movie=JSON.parse(localStorage.getItem('movie')||"{}");
    this.show=JSON.parse(localStorage.getItem("show")||"{}");
    this.finalSeats=JSON.parse(localStorage.getItem("finalSeats")||"{}");

   }

  ngOnInit(): void {
  }

  transmit()
  {
    this.bookingService.saveBooking(this.booking,this.user.emailId);
    this.router.navigate(['/payment']);
  }

}
