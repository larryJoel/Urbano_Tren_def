import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersClientService {
  
  private apiUrl = 'http://www.boletostrenes.somee.com/api/';

  constructor(private http: HttpClient) { }

  addUserSales(datos:any):Observable<any>{
    const url = `${this.apiUrl}Usuario/Agregar`;
    return this.http.post(url, datos);
  }

}
