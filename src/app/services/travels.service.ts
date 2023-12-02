import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Viajes } from "../interfaces/indexViajes";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TravelsService {

    constructor(private http: HttpClient) { }

    getResponse(): Observable<Viajes[]> {
         return this.http.get<Viajes[]>('http://www.boletostrenes.somee.com/api/Viaje/Viaje' 
        ).pipe( )
      };
}