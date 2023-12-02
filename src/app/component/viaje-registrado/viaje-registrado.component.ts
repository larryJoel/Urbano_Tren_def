import { Component, OnInit } from '@angular/core';
import { ServicioViajeService } from 'src/app/services/servicio-viaje.service';
import { TravelsService } from 'src/app/services/travels.service';

@Component({
  selector: 'app-viaje-registrado',
  templateUrl: './viaje-registrado.component.html',
  styleUrls: ['./viaje-registrado.component.css']
})
export class ViajeRegistradoComponent implements OnInit {
  viajes:any[]=[];
  opciones:any[]=[];
  constructor(private viajesListado:ServicioViajeService) {}
  
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.viajesListado.getViajesConNombres().subscribe(viajes => {
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
  }
}
