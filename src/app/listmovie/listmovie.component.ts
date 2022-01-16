import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Description } from '../description.model';
import { Movie } from '../movie.model';
import { DesService } from '../service/des.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {

  x:number[]=[1,2,3,4,5];
  y:number[]=[1,2,3];
  z:number[]=[1,2];

  des : Description[]=[];
  mov : Movie[]=[];
  constructor(private router:Router,private movService : MovieService,private desService : DesService) { }

  ngOnInit(): void {
    this.movService.http.get<Movie[]>(this.movService.baseUri+"/all").pipe(
      retry(1)
    ).subscribe(data=>this.mov=data);
    this.desService.http.get<Description[]>(this.desService.baseUri+"/all").pipe(retry(1)).subscribe(data=>this.des=data);

  }

  transmit()
  {
    this.router.navigate(['/show']);
  }

  transmit1()
  {
    this.router.navigate(['/des']);
  }

  deleteMovie(desId : number,movId : number)
  {
    this.desService.deleteDes(desId);
    this.movService.deleteMovie(movId);
    this.router.navigate(['/list']);
  }

}
