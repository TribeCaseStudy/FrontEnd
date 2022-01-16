import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-screen',
  templateUrl: './show-screen.component.html',
  styleUrls: ['./show-screen.component.css']
})
export class ShowScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  saveShow ()
  {
    this.router.navigate(['/list']);
  }
}
