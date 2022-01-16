import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Description } from '../description.model';
import { Movie } from '../movie.model';
import { DesService } from '../service/des.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  movie:Movie;
  des:Description[]=[];
  x:number=0;
  constructor(private router :Router,private movService :MovieService,private desService: DesService) {
    this.movie=new Movie();
   }

  ngOnInit(): void {
    this.movie=JSON.parse(localStorage.getItem("movie")||"{}");
    this.x=JSON.parse(localStorage.getItem("indexVal")||"{}");
    this.desService.http.get<Description[]>(this.desService.baseUri+"/all").pipe(retry(1)).subscribe(data=>this.des=data);
    localStorage.setItem("des",JSON.stringify(this.des[this.x]));
  }

}
