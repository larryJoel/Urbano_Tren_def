import { Component } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { OnInit } from '@angular/core';

import { Station } from 'src/app/interfaces/Station';
@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent {

  constructor(private estacion:StationService) {}
  estaciones:Station[]=[];
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  this.estacion.getStations().subscribe(est => 
    this.estaciones = est)
  }
}
