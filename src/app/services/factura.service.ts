import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl ='http://www.boletostrenes.somee.com/api/'
  constructor( private http:HttpClient) { }

  getFactura(): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.apiUrl+'Factura/Factura');
  }

  getFacturaPorId(id: number): Observable<Factura> {
    return this.http.get<Factura>(`${this.apiUrl}Factura/Factura/id:int?id=${id}`);
  }

  getFacturaPorIds(id: number): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${this.apiUrl}Factura/${id}`);
  }

  agregarFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.apiUrl + 'Factura/Agregar', factura);
  }

  eliminarFactura(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}Factura/Eliminar/${id}`);
  }
}
