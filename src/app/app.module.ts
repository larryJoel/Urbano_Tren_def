import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { BuscadorDeViajesComponent } from './component/buscador-de-viajes/buscador-de-viajes.component';
import { AsientosRegistradosComponent } from './component/asientos-registrados/asientos-registrados.component';
import { MetodoPagoComponent } from './component/metodo-pago/metodo-pago.component';
import { BotoneraComponent } from './component/botonera/botonera.component';
import { UsuarioRegistradoComponent } from './component/usuario-registrado/usuario-registrado.component';
import { ViajeRegistradoComponent } from './component/viaje-registrado/viaje-registrado.component';
import { TipoUsuarioComponent } from './component/tipo-usuario/tipo-usuario.component';
import { TrenesRegistradosComponent } from './component/trenes-registrados/trenes-registrados.component';
import { VentaComponent } from './component/venta/venta.component';
import { ImpresionDeFacturaComponent } from './component/impresion-de-factura/impresion-de-factura.component';
import { FormsModule } from "@angular/forms";
import { PasarelaPagoComponent } from './component/pasarela-pago/pasarela-pago.component';
import { EstacionesComponent } from './component/estaciones/estaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PrincipalComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactoComponent,
    UsuarioRegistradoComponent,
    ViajeRegistradoComponent,
    TipoUsuarioComponent,
    TrenesRegistradosComponent,
    BuscadorDeViajesComponent,
    AsientosRegistradosComponent,
    MetodoPagoComponent,
    BotoneraComponent,
    VentaComponent,
    PasarelaPagoComponent,
    ImpresionDeFacturaComponent,
    EstacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
