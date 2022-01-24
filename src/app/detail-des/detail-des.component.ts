import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Description } from '../description.model';
import { DesService } from '../service/des.service';

@Component({
  selector: 'app-detail-des',
  templateUrl: './detail-des.component.html',
  styleUrls: ['./detail-des.component.css']
})
export class DetailDesComponent implements OnInit {

  des:Description;
  constructor(private router:Router, private desService : DesService) {
    this.des=new Description();
    this.des.descriptionId=0;
   }

  ngOnInit(): void {
  }

  saveDes()
  {
    this.desService.addDes(this.des);
    localStorage.setItem("desdetail",JSON.stringify(this.des));
    this.router.navigate(['/add']);
  }
}
