import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Booking } from '../booking.model';
import { Movie } from '../movie.model';
import { Seat } from '../seat.model';
import { BookingService } from '../service/booking.service';
import { MovieService } from '../service/movie.service';
import { SeatService } from '../service/seat.service';
import { ShowScreenService } from '../service/show-screen.service';
import { ShowScreen } from '../showScreen.model';
import { User } from '../user.model';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {
  bookings:Booking[]=[];
  seats:Seat[][];
  shows:ShowScreen[]=[];
  movies:Movie[]=[];
  dateToday:number;
  date:string;
  user:User;
  constructor(private router:Router,private bookService:BookingService,private seatService:SeatService,private showScreenService:ShowScreenService,private movieService:MovieService) {
    this.seats=[];
    this.user=JSON.parse(localStorage.getItem("user")||"{}");
    this.dateToday=Date.now();
    this.date=new Date(this.dateToday).getFullYear().toString()+"-"+new Date(this.dateToday).getMonth()+1+"-"+new Date(this.dateToday).getDate();
   }

  ngOnInit(): void {
    this.userIdVal()
  }

  userIdVal()
  {
    this.bookService.http.get<Booking[]>(this.bookService.baseUri+"/all/"+this.user.emailId).pipe(retry(1)).subscribe(
      data=>{
        this.bookings=data;
        let k:number=0;
        for(let b of this.bookings)
        {
          if(b.statusBooking=="cancel")
          this.bookings.splice(k,1);

          k++;
        }
        
        for(let b of this.bookings.sort((x,y)=>x.bookingDate>y.bookingDate?1:(x.bookingDate<y.bookingDate?-1:0)))
        {
         
          this.seatService.http.get<Seat[]>(this.seatService.baseUri+"/bid/"+b.bookingId).pipe(retry(1)).subscribe(
            data=>{this.seats.push(data);
              this.seatService.http.get<number>(this.seatService.baseUri+"/show/"+this.seats[this.seats.length-1][this.seats[this.seats.length-1].length-1].seatId).pipe(retry(1)).subscribe(data=>{
                let x:number=data; 
                this.showScreenService.http.get<ShowScreen>(this.showScreenService.baseUri+"/sid/"+x).pipe(retry(1)).subscribe(
                  data=>{
                    this.shows.push(data);
                    this.showScreenService.http.get<number>(this.showScreenService.baseUri+"/movie/"+data.showId).pipe(retry(1)).subscribe(
                      data=>{
                        this.movieService.http.get<Movie>(this.movieService.baseUri+"/Id/"+data).pipe(retry(1)).subscribe(
                          data=>{
                            this.movies.push(data);
                          }
                        );
                      }
                    );
                  }
                );
              });
              
            }
          )
        }

      }
    );
  }

  transmit(b:Booking,seat:Seat[],showId:number,showDate:Date)
{
  if(new Date(showDate)>new Date(this.date)){

    for(let s of seat){
      this.seatService.updateSeatStatus("vacant",0,showId,s.seatId,s,this.user.emailId);
      this.bookService.updateBooking(b.bookingId,this.user.emailId,b);
      }
      
      this.router.navigate(['/refund']);

  }
 
}

freeSeat(seats:Seat[],seat:Seat,showId:number)
{
  if(seats.length>2){
  this.seatService.updateSeatStatus("vacant",0,showId,seat.seatId,seat,this.user.emailId);
  window.location.reload();}
}
}
