import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
// import { Trip } from '../model/TripDetails.model';
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { throwError as observableThrowError } from "rxjs";
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor( private http: HttpClient ) { }
  tokenApi() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "x-api-key": 'pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept'
      })
    };



    return this.http.get('https://tgauth-nnoplgwdpq-uc.a.run.app/' + "Token", options).pipe( map((response: any) => {
          localStorage.setItem('azureId', response.access_token);

          return response;
        }),
        catchError((error) => {
   
          return throwError(() => error);
        })
      );
  }

  allApi(User:Object){
   var Access_token = localStorage.getItem('azureId');
    return this.http.post('https://gcpsvc.dev.travogram.com/tgplans/'+"v2/All", User, { headers: new HttpHeaders({
      "Devicetype": 'Web',
      "Apikey": 'F8C6C638C8368ECDC36BF91BB961A',
      "Username": 'Prasanth',
      "Usertoken": 0,
      "Authorization": 'Bearer '+Access_token}) })
    .pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
   
        return throwError(() => error)})
    );
  }

  
}
