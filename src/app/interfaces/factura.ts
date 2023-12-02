export interface Factura 
{
    id_factura: number;
    fecha_emision:Date;
    cliente_id: number;
    total:number;
    descripcion:string 
}