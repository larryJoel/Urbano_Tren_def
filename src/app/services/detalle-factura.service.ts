import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{DetalleFactura}from '../interfaces/detalle_factura'
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {
  private apiUrl = 'http://www.boletostrenes.somee.com/api/';

  constructor(private http: HttpClient) { }

  agregarDetalleFactura(detalle: DetalleFactura[]): Observable<any[]> {
    const observables = detalle.map(item => this.http.post<DetalleFactura>(this.apiUrl + "Detalle_factura/Agregar", item));
    return forkJoin(observables);
  }
 
}
