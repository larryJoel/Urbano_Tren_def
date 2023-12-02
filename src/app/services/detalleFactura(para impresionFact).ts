import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detalleFactura } from '../interfaces/detalleFactura';
import { Factura } from '../interfaces/factura';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class detalleFacturaService {

  private apiUrl ='http://www.boletostrenes.somee.com/api/'
  constructor( private http:HttpClient) { }

  getdetalleFactura(id: number): Observable<detalleFactura[]>{
    return this.http.get<detalleFactura[]>(this.apiUrl+`Detalle_factura/Detalle/Id_factura:int?Id_factura=${id}`);
  }
}