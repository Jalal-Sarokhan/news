import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrl: './us.component.css'
})
export class UsComponent implements OnInit {
  constructor(private _services:NewsapiservicesService){}

//Daten von US
usNewsDisplay:any= [];
  ngOnInit() {
    this._services.usHeading().subscribe((result)=>{
      console.log(result);
      this.usNewsDisplay= result.articles;
    })
  }

}
