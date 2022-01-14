import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  transmit()
  {
    this.router.navigate(['/list']);
  }

}
