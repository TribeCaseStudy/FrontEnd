import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Booking } from '../booking.model';
import { Movie } from '../movie.model';
import { Seat } from '../seat.model';
import { SeatService } from '../service/seat.service';
import { ShowScreenService } from '../service/show-screen.service';
import { ShowScreen } from '../showScreen.model';
import { User } from '../user.model';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  movie: Movie;
  shows:ShowScreen[]=[];
  seats:Seat[]=[];
  user:User;
  booking:Booking;
  showId:number=0;
  show:ShowScreen;
  finalSeats:Seat[]=[];
  constructor(private router:Router,private seatService: SeatService, private showService : ShowScreenService) {
    this.movie=JSON.parse(localStorage.getItem("movie")||"{}");
    this.user=JSON.parse(localStorage.getItem("user")||"{}");
    this.booking=new Booking(0,"book");
    this.show=new ShowScreen();
   }

  ngOnInit(): void {
    this.showService.http.get<ShowScreen[]>(this.showService.baseUri+"/mid/"+this.movie.movieId).pipe(retry(1)).subscribe(
      data=>{
        this.shows=data;
      }

      );
  }
  nextpage()
  {
    localStorage.setItem("finalSeats",JSON.stringify(this.finalSeats));
    this.router.navigate(['/book']);
  }

  showSave(showId : number,showDate:Date,showTime:string,screen:number,status:string)
  {
    if(status=="avail"){
    this.showId=showId;
    this.seatService.http.get<Seat[]>(this.seatService.baseUri+"/sid/"+showId).pipe(retry(1)).subscribe(
      data=>
      this.seats=data
    );

    this.show={
      showId:showId,
      showDate:showDate,
      showTime: showTime,
      statusShow:status,
      screen:screen
    }
    localStorage.setItem("show",JSON.stringify(this.show));
    this.finalSeats=[];
  }
  }

  addBookingIdToSeat(seatId : number,seatNo:number,statusSeat:string)
  {
    let seat: Seat=new Seat(seatId,seatNo,statusSeat);
    if(statusSeat!="occupied")
      {this.finalSeats.push(seat);
      }
  }
}
