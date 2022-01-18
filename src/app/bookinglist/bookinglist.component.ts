import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Booking } from '../booking.model';
import { Seat } from '../seat.model';
import { BookingService } from '../service/booking.service';
import { SeatService } from '../service/seat.service';
import { ShowScreenService } from '../service/show-screen.service';
import { ShowScreen } from '../showScreen.model';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {
  bookings:Booking[]=[];
  userId:string="";
  seats:Seat[][];
  shows:ShowScreen[]=[];
  dateToday:number;
  date:string;
  validVal:string="valid for cancellation";
  constructor(private router:Router,private bookService:BookingService,private seatService:SeatService,private showScreenService:ShowScreenService) {
    this.seats=[];
    this.dateToday=Date.now();
    this.date=new Date(this.dateToday).getFullYear().toString()+"-"+new Date(this.dateToday).getMonth()+1+"-"+new Date(this.dateToday).getDate();
   }

  ngOnInit(): void {
  }

  userIdVal()
  {
    this.bookService.http.get<Booking[]>(this.bookService.baseUri+"/all/"+this.userId).pipe(retry(1)).subscribe(
      data=>{
        this.bookings=data;
        let i:number=0;
        let j:number=0;
        for(let b of this.bookings)
        {
          this.seats[i]=[];
          this.seatService.http.get<Seat[]>(this.seatService.baseUri+"/bid/"+b.bookingId).pipe(retry(1)).subscribe(
            data=>{this.seats[i]=data;
              this.seatService.http.get<number>(this.seatService.baseUri+"/show/"+this.seats[i][this.seats[i].length-1].seatId).pipe(retry(1)).subscribe(data=>{
                let x:number=data; 
                localStorage.setItem("x",JSON.stringify(x));
              });
              i++;
            }
          )
          this.showScreenService.http.get<ShowScreen>(this.showScreenService.baseUri+"/sid/"+JSON.parse(localStorage.getItem("x")||"{}")).pipe(retry(1)).subscribe(data=>{
            this.shows[j]=data;
            if(new Date(this.date)>=new Date(this.shows[j].showDate))
            {
              this.validVal="not valid for cancellation";
            }
            j++;
          });
        }

      }
    );
  }
  changeStat()
  {
    
  }

  transmit()
{
  this.router.navigate(['/refund']);
}
}
