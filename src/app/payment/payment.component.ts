import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, retry } from 'rxjs';
import { Booking } from '../booking.model';
import { Seat } from '../seat.model';
import { BookingService } from '../service/booking.service';
import { SeatService } from '../service/seat.service';
import { ShowScreen } from '../showScreen.model';
import { User } from '../user.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user:User;
  seats:Seat[]=[];
  show:ShowScreen;
  constructor(private router:Router,private bookingService:BookingService,private seatService:SeatService) { 
    
    this.user=JSON.parse(localStorage.getItem("user")||"{}");
    this.seats=JSON.parse(localStorage.getItem("finalSeats")||"{}");
    this.show=JSON.parse(localStorage.getItem("show")||"{}");
  }

  ngOnInit(): void {
  }

  nextpage()
  {
     let bookings :Booking[]=[];
     for(let seat of this.seats)
     {
    this.bookingService.http.get<Booking[]>(this.bookingService.baseUri+"/all/"+this.user.emailId).pipe(retry(1)).subscribe(data=>
      {
              bookings=data;
              //alert(bookings[bookings.length-1].bookingId);
              this.seatService.updateSeatStatus("occupied",bookings[bookings.length-1].bookingId,this.show.showId,seat.seatId,seat);
      });
    }
    this.router.navigate(['/ticket']);
  }
}
