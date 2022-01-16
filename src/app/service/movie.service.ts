import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Movie } from '../movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public baseUri : string="http://localhost:8880/movie";
  constructor(public http : HttpClient) { }

  addMovie(mov : Movie,desId:number)
  {
    this.http.post(this.baseUri + "/"+desId, mov).subscribe(data=>data=mov);
  }

  getMovieByDesId(desId : number)
  {
    this.http.get<Movie>(this.baseUri+"/desId"+desId).pipe(retry(1));
  }

  getMovieByMovieId(movieId : number)
  {
    this.http.get<Movie>(this.baseUri+"/Id/"+movieId).pipe(retry(1));
  }

  deleteMovie(movieId : number)
  {
    this.http.delete(this.baseUri+"/del/"+movieId).pipe(retry(1)).subscribe();
  }
}
