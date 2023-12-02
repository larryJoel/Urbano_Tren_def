import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

  //'http://www.boletostrenes.somee.com/api/MetodoPago/metodoPago'
  private apiUrl ='http://www.boletostrenes.somee.com/api/'

  constructor(private http: HttpClient) { }
  metodo:any[]=[];
 
  getMetodoPago(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'MetodoPago/metodoPago');
  }
  
  
  

}
