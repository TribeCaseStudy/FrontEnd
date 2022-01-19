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
  movies:Movie[]=[];
  dateToday:number;
  date:string;
  validVal:string[]=[];
  constructor(private router:Router,private bookService:BookingService,private seatService:SeatService,private showScreenService:ShowScreenService,private movieService:MovieService) {
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
        let k:number=0;
        for(let b of this.bookings)
        {
          if(b.statusBooking=="cancel")
          this.bookings.splice(k,1);

          k++;
        }
        let i:number=0;
        for(let b of this.bookings.sort((x,y)=>x.bookingDate>y.bookingDate?1:(x.bookingDate<y.bookingDate?-1:0)))
        {
          this.seats[i]=[];
          this.seatService.http.get<Seat[]>(this.seatService.baseUri+"/bid/"+b.bookingId).pipe(retry(1)).subscribe(
            data=>{this.seats[i]=data;
              this.seatService.http.get<number>(this.seatService.baseUri+"/show/"+this.seats[i][this.seats[i].length-1].seatId).pipe(retry(1)).subscribe(data=>{
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
              i++;
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
      this.seatService.updateSeatStatus("vacant",0,showId,s.seatId,s);
      this.bookService.updateBooking(b.bookingId,this.userId,b);
      }
      
      this.router.navigate(['/refund']);

  }
 
}
}
