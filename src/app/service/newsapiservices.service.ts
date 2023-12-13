import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

//fuer DE aber sind ohne Bilder!
deNewsapiUrl='https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=c8687032137347379f89766441d809b7';
//fuer USA mit manche Bilder
usNewsapiUrl='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c8687032137347379f89766441d809b7';
//fuer aegypten ohne Bilder
egNewsapiUrl='https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=c8687032137347379f89766441d809b7';


topHeading():Observable<any> 
{
  return this._http.get(this.deNewsapiUrl);
}

usHeading():Observable<any> 
{
  return this._http.get(this.usNewsapiUrl);
}
egHeading():Observable<any> 
{
  return this._http.get(this.egNewsapiUrl);
}



  
}
