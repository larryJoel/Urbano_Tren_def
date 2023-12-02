import { Component,OnInit } from '@angular/core';
import { Viajes } from '../../interfaces/indexViajes';
import { TravelsService } from '../../services/travels.service';
import { ServicioViajeService } from 'src/app/services/servicio-viaje.service';

@Component({
  selector: 'app-buscador-de-viajes',
  templateUrl: './buscador-de-viajes.component.html',
  styleUrls: ['./buscador-de-viajes.component.css']
})
export class BuscadorDeViajesComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  opciones: any[] = []; // Array para las opciones del select
  viajes:any[]=[];

  constructor(private TravelsService: TravelsService,
    private viajeService: ServicioViajeService) {}

  ngOnInit():void {
    this.getTravelsFromService();
    this.dtOptions = {pagingType: 'full_numbers'}

    this.viajeService.getViajesConNombres().subscribe(viajes => {
      this.viajes = viajes;
    
       // Crea un array de opciones para el select
    this.opciones = this.viajes.map(viaje => ({
      id: viaje.id,
      nombre: `${viaje.origenNombre}`,
      destino: `${viaje.destinoNombre}`,
      horarioSalida: `${new Date(viaje.horaSal).toLocaleString()}`,
      disponible:`${viaje.disponible}`
    }));
    });
  };

  getTravelsFromService(): any  { 
    this.TravelsService.getResponse().subscribe((viajes) => {
      this.viajes = viajes;
      return this.viajes
    })
  }
}