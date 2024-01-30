import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { CerrarSesionComponent } from './modulos/cerrar-sesion/cerrar-sesion.component';
import { ReporteComponent } from './modulos/contabilidad/reporte/reporte.component';
import { SoporteComponent } from './modulos/contabilidad/soporte/soporte.component';
import { BandejaRrhhComponent } from './modulos/rrhh/bandeja-rrhh/bandeja-rrhh.component';
import { IngresoComponent } from './modulos/rrhh/ingreso/ingreso.component';
import { LiquidacionComponent } from './modulos/rrhh/liquidacion/liquidacion.component';
import { BandejaComponent } from './modulos/soporte-tecnico/bandeja/bandeja.component';
import { NuevoTicketComponent } from './modulos/soporte-tecnico/nuevo-ticket/nuevo-ticket.component';
import { PermisosSistemaComponent } from './modulos/soporte-tecnico/permisos-sistema/permisos-sistema.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'contabilidad/reporte', component: ReporteComponent }, 
      { path: 'contabilidad/soporte', component: SoporteComponent},
      
      { path: 'rrhh/bandeja-rrhh', component: BandejaRrhhComponent},
      { path: 'rrhh/ingreso', component: IngresoComponent},
      { path: 'rrhh/liquidacion', component: LiquidacionComponent},

      { path: 'soporte-tecnico/bandeja', component: BandejaComponent},
      { path: 'soporte-tecnico/nuevo-ticket', component: NuevoTicketComponent},
      { path: 'soporte-tecnico/permisos-sistema', component: PermisosSistemaComponent},
      { path: 'usuarios', component: UsuariosComponent},
      { path: 'cerrar-sesion', component: CerrarSesionComponent }
    ]
  },
  {
    path: 'Reporte', component: ReporteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
