import { Component } from '@angular/core';
import { UsersClientService } from 'src/app/services/users-client.service';

@Component({
  selector: 'app-pasarela-pago',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.css']
})
export class PasarelaPagoComponent {

  formData: any={}

  constructor(private clientsServ: UsersClientService) {}

  sendForm(){
    this.clientsServ.addUserSales(this.formData)
    .subscribe(
      res => {
        console.log('respuesta de la api', res);
      },
      error=>{
        console.log('error al enviar los datos',error);
      }
    )
  }

}
