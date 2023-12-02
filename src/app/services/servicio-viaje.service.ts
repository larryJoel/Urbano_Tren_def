import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Viajes } from '../interfaces/indexViajes';
import { Station } from '../interfaces/Station';

@Injectable({
  providedIn: 'root'
})
export class ServicioViajeService {

  private apiUrl ='http://www.boletostrenes.somee.com/api/';
  
  constructor(private http:HttpClient) { }

  getViajesConNombres(): Observable<any[]> {
    return forkJoin([
      this.http.get<Viajes[]>('http://www.boletostrenes.somee.com/api/Viaje/Viaje'),
      this.http.get<Station[]>('http://www.boletostrenes.somee.com/api/controller/Estacion') 
    ]).pipe(
      map(([viajes, estaciones]) => {
        return viajes
        .filter(viaje => viaje.disponible > 0) // Filtrar viajes con disponibilidad > 0
        .map(viaje => ({
          ...viaje,
          origenNombre: this.getNombrePorId(viaje.origen, estaciones),
          destinoNombre: this.getNombrePorId(viaje.destino, estaciones),
        }));
      })
    );
  }
  private getNombrePorId(id: number, estaciones: Station[]): string {
    const estacion = estaciones.find(est => est.id === id);
    return estacion ? estacion.nombre : 'Desconocido';
  }
}
