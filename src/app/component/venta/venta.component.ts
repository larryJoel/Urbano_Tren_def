import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, event } from 'jquery';
import { Station } from 'src/app/interfaces/Station';
import { Factura } from 'src/app/interfaces/factura';
import { Viajes } from 'src/app/interfaces/indexViajes';
import { DetalleFacturaService } from 'src/app/services/detalle-factura.service';
import { FacturaService } from 'src/app/services/factura.service';
import { GenerateTicketService } from 'src/app/services/generate-ticket.service';
import { MetodoPagoService } from 'src/app/services/metodo-pago.service';
import { ServicioViajeService } from 'src/app/services/servicio-viaje.service';
import { StationService } from 'src/app/services/station.service';
import { TravelsService } from 'src/app/services/travels.service';
import { UsersClientService } from 'src/app/services/users-client.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  
  facturaId:number=0;
  //datos de los boletos
  cantBasico:number=0;
  cantMenores:number=0;
  cantmayores:number=0;
  cantExonerado:number=0;

  precioBasico:number = 15;
  precioMenores:number= 12;
  precioMayores:number = 10;
  precioExonerado:number = 0;

  totalBasico: number = 0;
  totalMenores: number = 0;
  totalMayores: number = 0;
  totalExonerado: number = 0;
  totalGeneral:number = 0;

  //datos del viaje
  viaje_Id:number=0;
  viaje_HS:string="";
  viaje_HLL:string="";
  viaje_origen:string="";
  viaje_destino: string ="";
  viaje_tren:string="";

  
  variable:Boolean= false;
  variable2:Boolean= true;
  viajesDispon:Viajes[]=[];
  estacion:Station[]=[];
  viajes:any[]=[];
  opciones: any[] = []; // Array para las opciones del select
  formapago:any[]=[]; //array para las formas de pago
  selectedOption:any; // Propiedad para almacenar la opción seleccionada
  formData:any ={};
  mostrar:string="";
  

  nuevaFactura:Factura ={
    id_factura: 0,
    fecha_emision: new Date(),
    cliente_id: 1,
    total:1500,
    descripcion: ""
  };

  constructor(
    private service:TravelsService,
    private stacion:StationService,
    private viajeService: ServicioViajeService,
    private router:Router,
    private metodopago: MetodoPagoService,
    private facturar: FacturaService,
    private detalleFact: DetalleFacturaService,
    private generadorTicket: GenerateTicketService,
    private clientsServ: UsersClientService  ) {
  }

  ngOnInit(): void {
    

      this.service.getResponse().subscribe((data:Viajes[])=>{
        this.viajesDispon = data;
       
      });

      this.stacion.getStations().subscribe((data:Station[])=>{
        this.estacion=data;
        
      })

      this.viajeService.getViajesConNombres().subscribe(viajes => {
        this.viajes = viajes;
      
         // Crea un array de opciones para el select
        this.opciones = this.viajes.map(viaje => ({
        id: viaje.id,
        nombre: `Disponible: ${viaje.disponible} - ${viaje.origenNombre} - ${viaje.destinoNombre} - Salida: ${new Date(viaje.horaSal).toLocaleString()}`
        }));
      });

      this.metodopago.getMetodoPago().subscribe((data:any[])=>{
        this.formapago=data;
      })

  }

  activarMostrarBoletos(){
    this.variable2 = false;
    this.variable = true;
    console.log('Viaje seleccionado:', this.selectedOption);
    this.nuevaFactura.descripcion = this.selectedOption;
  } 

  desactivarMostrarBoletos(){
    this.variable2 = true;
    this.variable = false;
    this.selectedOption="";
    this.cantBasico=0;
    this.cantMenores=0;
    this.cantmayores=0;
    this.cantExonerado=0;
    this.totalBasico = 0;
    this.totalMenores = 0;
    this.totalMayores = 0;
    this.totalExonerado = 0;
    this.totalGeneral= 0;
  }

   //enviar datos desde el modal
  sendForm(){
    //crear usuario, puede estar o no
    //recuerda crear una opción para crear usuario o no
    this.clientsServ.addUserSales(this.formData)
    .subscribe(
      res => {
        //console.log('respuesta de la api', res);
        //this.irAPasarela()
      },
      error=>{
        //console.log('error al enviar los datos',error);
      }
    )
    this.generarFactura();
    //this.generarDetalle_factura(); //verificar
  }

  crearCliente(){}

  calcularTotales() {
    this.totalBasico = this.cantBasico * this.precioBasico;
    this.totalMenores = this.cantMenores * this.precioMenores;
    this.totalMayores = this.cantmayores * this.precioMayores;
    this.totalExonerado = this.cantExonerado * this.precioExonerado;
    this.totalGeneral = this.totalBasico + this.totalMenores + this.totalMayores + this.totalExonerado;
  }

   //generar la factura cabecera
  generarFactura(){
    this.nuevaFactura.fecha_emision = new Date();
    this.nuevaFactura.cliente_id = 1;
    this.nuevaFactura.total = this.totalGeneral;
    this.nuevaFactura.descripcion = this.selectedOption
    this.facturar.agregarFactura(this.nuevaFactura)
    .subscribe(
      res =>{
        if (res && res.id_factura) {
          this.facturaId = res.id_factura;
          this.generarDetalle_factura();
        }else{
          console.log('La factura no contiene Id',res);
        }
      },
      error =>{
        console.log('error en la creación de la factura',error);
      }
    )
    //this.generarDetalle_factura();
  }

  generarDetalle_factura(){
    
     const detalleFactura: any[] = [];
     
     // Crear ítem para el básico
     const itemBasico = {
      id_factura: this.facturaId,
      cantidad: this.cantBasico,
      descripcion: 'Básico',
      precio_unitario: this.precioBasico, 
      subTotal: this.cantBasico * this.precioBasico 
    };
    detalleFactura.push(itemBasico);
    // Crear ítem para menores
    const itemMenores = {
      id_factura: this.facturaId,
      cantidad: this.cantMenores,
      descripcion: 'Menores',
      precio_unitario: this.precioMenores, 
      subTotal: this.cantMenores * this.precioMenores
    };
    detalleFactura.push(itemMenores);

     // Crear ítem para mayores
     const itemMayores = {
      id_factura: this.facturaId,
      cantidad: this.cantmayores,
      descripcion: 'Mayores',
      precio_unitario: this.precioMayores, 
      subTotal: this.precioMayores * this.cantmayores,
    };
    detalleFactura.push(itemMayores);

     // Crear ítem para exonerado
     const itemExonerado = {
      id_factura: this.facturaId,
      cantidad: this.cantExonerado,
      descripcion: 'Exonerado',
      precio_unitario: this.precioExonerado, 
      subTotal: 0
    };
    detalleFactura.push(itemExonerado);
   
    this.detalleFact.agregarDetalleFactura(detalleFactura).subscribe(
      (res) =>{console.log('respuesta del servicio', res);}
    ),
    (error: any)=>{
      console.error('error en la solicitud HTTP', error)
    }
    this.crearTickets();
  }
  
  crearTickets() {    
    this.generadorTicket.generateTicketFromFactura(this.facturaId)
      .subscribe(
        response => {
          // Manejar la respuesta del servidor si es necesario
          console.log("Respuesta del servidor:", response);
          this.irAPasarela(this.facturaId);
        },
        error => {
          // Manejar errores si los hay
          console.error("Error en la solicitud:", error);
        }
      );
  }

  irAPasarela(id:number){
    console.log("id:", this.facturaId);
    this.router.navigate(['/impresionFact'], {
      queryParams: { variable: this.facturaId }
    });
    //this.router.navigate(['/pasarela'])
  }
 ///comentario para prueba de github
//comentario 02 para probar
}
   
