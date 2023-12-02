import { Component } from '@angular/core';

@Component({
  selector: 'app-asientos-registrados',
  templateUrl: './asientos-registrados.component.html',
  styleUrls: ['./asientos-registrados.component.css']
})
export class AsientosRegistradosComponent {

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
