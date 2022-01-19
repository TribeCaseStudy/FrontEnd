import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUri:string="http://localhost:8880/booking"
  constructor(public http:HttpClient) { }

  saveBooking(booking : Booking, userId : string)
  {
    this.http.post(this.baseUri+"/"+userId,booking).subscribe(data=>data=booking);
  }

  updateBooking(bookingId:number,userId:string,b:Booking)
  {
    this.http.put(this.baseUri+"/update/"+bookingId+"/"+userId,b).subscribe();
  }
}
