import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class GenerateTicketService {

  private apiUrl ='http://www.boletostrenes.somee.com/api/';
  constructor(private http: HttpClient) { }

  getTicketForTickets(idTicket: number): Observable<Ticket[]> {
    const url = `${this.apiUrl}Ticket/ticketPorFactura/${idTicket}`;
    return this.http.get<Ticket[]>(url);
  }

  generateTicketFromFactura(idFactura: number): Observable<any> {
    const url = `${this.apiUrl}Detalle_factura/Agregar/id_factura:int?id_factura=${idFactura}`;
    return this.http.post(url, {});
  }

  //http://www.boletostrenes.somee.com/Api/Detalle_factura/Agregar/id_factura:int?id_factura=24
}
