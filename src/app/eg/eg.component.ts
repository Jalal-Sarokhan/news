import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-eg',
  templateUrl: './eg.component.html',
  styleUrl: './eg.component.css'
})
export class EgComponent implements OnInit{
  constructor(private _services:NewsapiservicesService){}

//Daten von aegypten
egNewsDisplay:any= [];
  ngOnInit() {
    this._services.egHeading().subscribe((result)=>{
      console.log(result);
      this.egNewsDisplay= result.articles;
    })
  }

}
