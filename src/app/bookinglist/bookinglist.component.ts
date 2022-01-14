import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  x:number[]=[1,2,3];
  y:number[]=[1,2,3,4,5];
  str:string="occupied";
  str1:string="book";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  changeStat()
  {
    this.str="vacant";
  }

  transmit()
{
  this.router.navigate(['/refund']);
  this.str1="cancelled";
}
}
