import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalcService {

  constructor(private http:HttpClient) { 

  }

  public sendCalculate(m: number, h: number){
    return this.http.post("http://localhost:3999/calc/bmi",{
      "m": m,
      "h": h
    });
  }
}
