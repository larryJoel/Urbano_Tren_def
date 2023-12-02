import { Injectable } from '@angular/core';
import { UserReg } from '../interfaces/user-reg'; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserRegisService {

  constructor(private http: HttpClient) { }

  getUserReg(): Observable<UserReg[]> {
    return this.http.get<UserReg[]>('http://www.boletostrenes.somee.com/api/Usuario/Usuario').pipe()
};
}
