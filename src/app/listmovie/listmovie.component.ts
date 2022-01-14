import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {

  x:number[]=[1,2,3,4,5];
  y:number[]=[1,2,3];
  z:number[]=[1,2];
  constructor() { }

  ngOnInit(): void {
  }

}
