import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Description } from '../description.model';
import { Movie } from '../movie.model';
import { DesService } from '../service/des.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  mov:Movie;
  constructor(private router:Router, private movieService: MovieService,private desService : DesService) {
    this.mov=new Movie();
    this.mov.movieId=0;
   }

  ngOnInit(): void {
  }

  saveMov()
  {
   let x:Description=JSON.parse(localStorage.getItem("desdetail")||"{}");
   this.desService.http.get(this.desService.baseUri+"/"+x.actor+"/"+x.actress+"/"+x.director+"/"+x.producer+"/"+x.writer).pipe(retry(1)).subscribe(
     data=>
     {
       this.movieService.addMovie(this.mov,parseInt(JSON.stringify(data)));
     }
   );
    this.router.navigate(['/list']);
  }

}
