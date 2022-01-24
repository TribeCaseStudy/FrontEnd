import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { Description } from '../description.model';
import { Movie } from '../movie.model';
import { DesService } from '../service/des.service';
import { MovieService } from '../service/movie.service';
import { User } from '../user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  url:string[]=["https://www.youtube.com/embed/JfVOs4VSpmA","https://www.youtube.com/embed/Gs9TQr1D9Ps","https://www.youtube.com/embed/KWWFMW-sAUY","https://www.youtube.com/embed/KWWFMW-sAUY","https://www.youtube.com/embed/kP9TfCWaQT4","https://www.youtube.com/embed/oPk9VLruoos","https://www.youtube.com/embed/tgbNymZ7vqY"];
  movie:Movie;
  des:Description[]=[];
  x:number=0;
  user:User;
  y:number;
  str:SafeResourceUrl;
  constructor(private router :Router,private movService :MovieService,private desService: DesService,private sanitizer:DomSanitizer) {
    this.movie=new Movie();
    this.user=JSON.parse(localStorage.getItem("user")||"{}");
    this.y=parseInt(JSON.parse(localStorage.getItem("no")||"{}"));
    this.str=this.sanitizer.bypassSecurityTrustResourceUrl(this.url[this.y]);
   }

  ngOnInit(): void {
    this.movie=JSON.parse(localStorage.getItem("movie")||"{}");
    this.x=JSON.parse(localStorage.getItem("indexVal")||"{}");
    this.desService.http.get<Description[]>(this.desService.baseUri+"/all").pipe(retry(1)).subscribe(data=>this.des=data);
    localStorage.setItem("des",JSON.stringify(this.des[this.x]));
    localStorage.removeItem("show");
    localStorage.removeItem("finalSeats");
    localStorage.removeItem("booking");
    //alert(this.str);
  }

  nextPage()
  {
    if(JSON.stringify(this.user)=="{}")
    {
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/seat']);
    }
  }

}
