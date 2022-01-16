import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }

  validateLogin(email:string,password:string)
  {
    return this.http.get<User>("http://localhost:8880/user/"+email+"/"+password).pipe(delay(100));
  }

  createUser(user : User)
  {
    this.http.post("http://localhost:8880/user",user).subscribe(data=>data=user);
  }
}
