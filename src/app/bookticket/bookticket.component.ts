import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  transmit()
  {
    this.router.navigate(['/payment']);
  }

}
