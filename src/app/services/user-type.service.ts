import { Injectable } from '@angular/core';
import { UserTypes } from "../interfaces/user-type";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private http: HttpClient) { }

  getUserType(): Observable<UserTypes[]> {
    return this.http.get<UserTypes[]>('http://www.boletostrenes.somee.com/Api/TipoUsuario/TipoUsuario')
};
}
