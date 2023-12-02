import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from "../interfaces/Station";


@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) {}
  getStations():Observable<Station[]> {
    return this.http.get<Station[]>('http://www.boletostrenes.somee.com/api/controller/Estacion')
  };
}