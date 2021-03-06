import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seat } from '../seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  baseUri:string="http://localhost:8880/seat";
  constructor(public http:HttpClient) { }

  addSeat(seat : Seat,showId : number)
  {
    this.http.post(this.baseUri+"/"+showId,seat).subscribe(data=>data=seat);
  }

  updateSeatStatus(stat:string,bookingId:number,showId:number,seatId:number,seat : Seat,userId : string)
  {
    this.http.put(this.baseUri+"/"+stat+"/"+bookingId+"/"+showId+"/"+seatId+"/"+userId,seat).subscribe();
  }
}
