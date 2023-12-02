import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { BuscadorDeViajesComponent } from './component/buscador-de-viajes/buscador-de-viajes.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { UsuarioRegistradoComponent } from './component/usuario-registrado/usuario-registrado.component';
import { TipoUsuarioComponent } from './component/tipo-usuario/tipo-usuario.component';
import { ViajeRegistradoComponent } from './component/viaje-registrado/viaje-registrado.component';
import { BotoneraComponent } from './component/botonera/botonera.component';
import { TrenesRegistradosComponent } from './component/trenes-registrados/trenes-registrados.component';
import { AsientosRegistradosComponent } from './component/asientos-registrados/asientos-registrados.component';
import { MetodoPagoComponent } from './component/metodo-pago/metodo-pago.component';
import { VentaComponent } from './component/venta/venta.component';
import { PasarelaPagoComponent } from './component/pasarela-pago/pasarela-pago.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { ImpresionDeFacturaComponent } from './component/impresion-de-factura/impresion-de-factura.component';
import { EstacionesComponent } from './component/estaciones/estaciones.component';

const routes: Routes = [
  {path:"principal",component:PrincipalComponent},
  {path:"buscadordeviajes",component:BuscadorDeViajesComponent},
  {path:"servicio", component:ServiciosComponent},
  {path:"usuarioRegistrado", component:UsuarioRegistradoComponent},
  {path:"tipoUsuario", component:TipoUsuarioComponent},
  {path:"viajeRegistrado", component:ViajeRegistradoComponent},
  {path:"trenesReg", component:TrenesRegistradosComponent},
  {path:"asientoReg", component:AsientosRegistradosComponent},
  {path:"metodoPago", component:MetodoPagoComponent},
  {path:"botonera", component:BotoneraComponent},
  {path:"venta", component:VentaComponent},
  {path:"pasarela", component:PasarelaPagoComponent},
  {path:"nosotros", component:NosotrosComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"impresionFact", component:ImpresionDeFacturaComponent},
  {path:"estaciones",component:EstacionesComponent},
  {path:"**", component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
