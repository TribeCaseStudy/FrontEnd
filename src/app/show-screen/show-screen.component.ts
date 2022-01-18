import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Seat } from '../seat.model';
import { SeatService } from '../service/seat.service';
import { ShowScreenService } from '../service/show-screen.service';
import { ShowScreen } from '../showScreen.model';

@Component({
  selector: 'app-show-screen',
  templateUrl: './show-screen.component.html',
  styleUrls: ['./show-screen.component.css']
})
export class ShowScreenComponent implements OnInit {

  show:ShowScreen;
  seats:Seat[]=[];
  x:number=0;
  dateToday:number;
  date:string;
  constructor(private router:Router,private seatService:SeatService,private showService:ShowScreenService) {
    this.show=new ShowScreen();
    this.dateToday=Date.now();
    this.date=new Date(this.dateToday).getFullYear().toString()+"-"+new Date(this.dateToday).getMonth()+1+"-"+new Date(this.dateToday).getDate();
    this.show.showId=0;
    this.show.statusShow="avail";
    let i:number=0;
    while(i<10){
    this.seats[i]={
      seatId:0,
      seatNo:i+1,
      statusSeat:"vacant"
    };
    i++;
    }
   }

  ngOnInit(): void {
  }

  
  saveShow ()
  {
    this.showService.addShow(this.show,this.x);
  }

  saveSeat()
  {
    let shows:ShowScreen[]=[]
    this.showService.http.get<ShowScreen[]>(this.showService.baseUri+"/mid/"+this.x).pipe(retry(1)).subscribe(
      data=>{
        shows=data;
        for(let seat of this.seats)
        this.seatService.addSeat(seat,shows[shows.length-1].showId);
        
      }
    )
    //alert();
    this.router.navigate(['/list']);
  }
}
