import { Component } from '@angular/core';
import { payMethods } from 'src/app/interfaces/pay-method';
import { PayMethodService } from 'src/app/services/pay-method.service';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent {

  dtOptions: DataTables.Settings = {};

  public pagos!: payMethods[];

  constructor(private payMethod: PayMethodService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
 //   this.getPayMethod()
  }

  getPayMethod(): any {
    this.payMethod.getPayMethod().subscribe((pagos) => {
      this.pagos = pagos;
      return this.pagos
    })
  }
}
