import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, retry } from 'rxjs';
import { Description } from '../description.model';

@Injectable({
  providedIn: 'root'
})
export class DesService {

  baseUri: string="http://localhost:8880/des";
  
  constructor(public http: HttpClient) { }

  addDes(des : Description)
  {
    this.http.post(this.baseUri,des).subscribe(data=>data=des);
  }

  getDesById(desId : number)
  {
    this.http.get<Description>(this.baseUri+"/show/"+desId).pipe(retry(1));
  }

  deleteDes(desId : number)
  {
    this.http.delete(this.baseUri+"/delete/"+desId).subscribe();
  }

  getDes(actor : string, actress : string, director : string, producer : string, writer : string)
  {
    let x:number;
    this.http.get<number>(this.baseUri+'/'+actor+"/"+actress+"/"+director+"/"+producer+"/"+writer).pipe(retry(1))
    .subscribe(data=>{x=data
      localStorage.setItem("desId",JSON.stringify(x));
    }
      );
  }

}
