import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import { detalleFacturaService } from 'src/app/services/detalleFactura(para impresionFact)';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket-service';

@Component({
  selector: 'app-impresion-de-factura',
  templateUrl: './impresion-de-factura.component.html',
  styleUrls: ['./impresion-de-factura.component.css']
})

export class ImpresionDeFacturaComponent implements OnInit {
  seccionDeFactura: any[] = []; // Array para las opciones del select
  facturas: any;
  detalleFacturas: any[] = [];
  detalleOpcionesFactura: any[] = [];
  dtOptions: DataTables.Settings = {};
  idConsulta: number = 15;
  ticket: any;
  tickets: any[]=[];
  constructor(private FacturaService: FacturaService, 
    private detalleFacturaService: detalleFacturaService,
    private route: ActivatedRoute,
    private ticketService:TicketService ) {}

  ngOnInit():void {
    this.dtOptions = {pagingType: 'full_numbers'}

    // Lee los parámetros de consulta
    this.route.queryParams.subscribe(params => {
    const miVariable = params['variable'];
    this.idConsulta = miVariable;
    console.log('recibiendo:',miVariable);  // Imprime la variable en la consola
    }); 

    this.FacturaService.getFacturaPorId(this.idConsulta).subscribe((facturasObt) => {
      this.facturas = facturasObt;
    });
    this.detalleFacturaService.getdetalleFactura(this.idConsulta).subscribe ( detalleFactura => {
      this.detalleFacturas = detalleFactura;
      this.detalleOpcionesFactura = this.detalleFacturas.map(detFact => ({
        id: `${detFact.id}`,
        id_factura:`${detFact.id_factura}`,
        id_ticket: `${detFact.id_ticket}`,
        cantidad:`${detFact.cantidad}`,
        descripcion:`${detFact.descripcion}`,
        precio_unitario:`${detFact.precio_unitario}`,
        subTotal:`${detFact.subTotal}`
      }))
    })

    this.ticketService.getTicketPorId(this.idConsulta).subscribe((ticketObt) => {
      this.ticket = ticketObt;
    })

   /*  this.ticketService.getTicketsPorId(this.idConsulta).subscribe((ticketObtdo) => {
      this.tickets = ticketObtdo;
    }) */
}
}