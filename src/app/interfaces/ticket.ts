export interface Ticket{
    id:number;
    fechaCreate:Date;
    fechaEdit:Date;
    fechaExpira:Date;
    EstadoTicket:string;
    MetodoPagoId:number;
    TipoTicketId:number;
    viajeId:number;
    id_factura:number;
    description:string;
    tipo:string;
}