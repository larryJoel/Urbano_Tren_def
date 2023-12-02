import { Component } from '@angular/core';
import { TrainRegis } from 'src/app/interfaces/train-regis';
import { TrainRegiService } from 'src/app/services/train-regi.service';

@Component({
  selector: 'app-trenes-registrados',
  templateUrl: './trenes-registrados.component.html',
  styleUrls: ['./trenes-registrados.component.css']
})
export class TrenesRegistradosComponent {

  constructor(private TrainReg: TrainRegiService) {}
  
  dtOptions: DataTables.Settings = {};
  public trenes!: TrainRegis[];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getTrainReg();
  }

  getTrainReg(): any {
    this.TrainReg.getTrainReg().subscribe((trenes) => {
      this.trenes = trenes;
      return this.trenes
    })
  }
}