import { Injectable } from '@angular/core';
import { TrainRegis } from '../interfaces/train-regis'; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainRegiService {

  constructor( private http: HttpClient) { }

  getTrainReg(): Observable<TrainRegis[]> {
    return this.http.get<TrainRegis[]>('http://www.boletostrenes.somee.com/api/Trenes/Trenes').pipe()
};
}
