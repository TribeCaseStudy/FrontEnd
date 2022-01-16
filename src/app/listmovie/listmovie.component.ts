import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Description } from '../description.model';
import { Movie } from '../movie.model';
import { DesService } from '../service/des.service';
import { MovieService } from '../service/movie.service';
import { ShowScreenService } from '../service/show-screen.service';
import { ShowScreen } from '../showScreen.model';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {

  des : Description[]=[];
  mov : Movie[]=[];
  show : ShowScreen[][];
  constructor(private router:Router,private movService : MovieService,private desService : DesService,private showService : ShowScreenService) { 
    this.show=[];
  }

  ngOnInit(): void {
    this.movService.http.get<Movie[]>(this.movService.baseUri+"/all").pipe(
      retry(1)
    ).subscribe(data=>{
      this.mov=data;
      let i:number=0;
      for(let m of this.mov){
        this.show[i]=[];
        this.showService.http.get<ShowScreen[]>(this.showService.baseUri+"/mid/"+m.movieId).subscribe(data=>
          { 
            this.show[i]=data;
            i++;
          });
      }
    });
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

  deleteShow(){
    
  } 
}
