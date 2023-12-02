import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl ='http://www.boletostrenes.somee.com/api/'
  constructor( private http:HttpClient) { }

  getTicket(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiUrl+'Ticket/Ticket');
  }
  getTicketPorId(id:number): Observable<Ticket>{
    return this.http.get<Ticket>(this.apiUrl+`Ticket/ticketPorFactura/${id}`)
  }

/*   getTicketsPorId(id:number): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiUrl+`Ticket/ticketPorFactura/${id}`)
  } */

  /*Ticket/ticketPorFactura/{Id_factura}*/
}