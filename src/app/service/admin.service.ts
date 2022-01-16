import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Admin } from '../admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  validateLogin(email:string,password:string)
  {
    return this.http.get<Admin>("http://localhost:8880/admin/"+email+"/"+password).pipe(delay(100));
  }
}
