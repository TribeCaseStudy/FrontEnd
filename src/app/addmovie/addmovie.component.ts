import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  mov:Movie;
  constructor(private router:Router, private movieService: MovieService) {
    this.mov=new Movie();
    this.mov.movieId=0;
   }

  ngOnInit(): void {
  }

  saveMov()
  {
   let x:number=JSON.parse(localStorage.getItem("desId")||"{}");
    this.movieService.addMovie(this.mov,x);
    this.router.navigate(['/list']);
  }

}
