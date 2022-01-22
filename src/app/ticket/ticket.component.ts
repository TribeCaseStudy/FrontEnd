import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking.model';
import { Seat } from '../seat.model';
import { ShowScreen } from '../showScreen.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  show:ShowScreen;
  finalSeats:Seat[]=[];
  booking:Booking;
  constructor() {
    this.show=JSON.parse(localStorage.getItem("show")||"{}");
    this.finalSeats=JSON.parse(localStorage.getItem("finalSeats")||"{}");
    this.booking=JSON.parse(localStorage.getItem("booking")||"{}");
   }

  ngOnInit(): void {
  }


}
