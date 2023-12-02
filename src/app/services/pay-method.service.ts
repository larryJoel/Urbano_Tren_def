import { Injectable } from '@angular/core';
import { payMethods } from "../interfaces/pay-method";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class PayMethodService {

  constructor(private http: HttpClient) { }
  
  getPayMethod(): Observable<payMethods[]> {
    return this.http.get<payMethods[]>('http://www.boletostrenes.somee.com/api/MetodoPago/metodoPago').pipe()
};
}
