import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Movie } from '../movie.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies : Movie[]=[];
  constructor(private router :Router,private movService : MovieService) { }

  ngOnInit(): void {
    this.movService.http.get<Movie[]>(this.movService.baseUri+"/all").pipe(
      retry(1)
    ).subscribe(data=>this.movies=data);
  }

  nextPage(x: number,i : number)
  {
    localStorage.setItem("movie",JSON.stringify(this.movies[i]));
    localStorage.setItem("indexVal",JSON.stringify(i));
    localStorage.removeItem("show");
    localStorage.removeItem("finalSeats");
    localStorage.removeItem("booking");
    this.router.navigate(['/detail']);
  }

}
