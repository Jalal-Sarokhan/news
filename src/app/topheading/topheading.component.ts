import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrl: './topheading.component.css'
})
export class TopheadingComponent implements OnInit{
constructor(private _services:NewsapiservicesService){}

//Daten
topheadingDisplay:any= [];
  ngOnInit() {
    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay= result.articles;
    })
  }
   
}
