import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { CerrarSesionComponent } from './modulos/cerrar-sesion/cerrar-sesion.component';
import { NuevoTicketComponent } from './modulos/soporte-tecnico/nuevo-ticket/nuevo-ticket.component';
import { BandejaComponent } from './modulos/soporte-tecnico/bandeja/bandeja.component';
import { PermisosSistemaComponent } from './modulos/soporte-tecnico/permisos-sistema/permisos-sistema.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { IngresoComponent } from './modulos/rrhh/ingreso/ingreso.component';
import { LiquidacionComponent } from './modulos/rrhh/liquidacion/liquidacion.component';
import { BandejaRrhhComponent } from './modulos/rrhh/bandeja-rrhh/bandeja-rrhh.component';
import { ReporteComponent } from './modulos/contabilidad/reporte/reporte.component';
import { SoporteComponent } from './modulos/contabilidad/soporte/soporte.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    CerrarSesionComponent,
    NuevoTicketComponent,
    BandejaComponent,
    PermisosSistemaComponent,
    UsuariosComponent,
    IngresoComponent,
    LiquidacionComponent,
    BandejaRrhhComponent,
    ReporteComponent,
    SoporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
