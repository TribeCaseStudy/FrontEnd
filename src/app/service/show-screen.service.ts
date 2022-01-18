import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowScreen } from '../showScreen.model';

@Injectable({
  providedIn: 'root'
})
export class ShowScreenService {

  baseUri: string="http://localhost:8880/show";
  constructor(public http : HttpClient) { }

  addShow(show : ShowScreen,movieId : number)
  {
    this.http.post(this.baseUri+"/"+movieId,show).subscribe(data=>data=show);
  }

  updateShow(show : ShowScreen,movieId : number)
  {
    this.http.put(this.baseUri+"/update/"+movieId,show).subscribe(data=>data=show);
  }
}
