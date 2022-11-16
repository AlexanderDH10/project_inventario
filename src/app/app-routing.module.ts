import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { BienesComponent } from './components/bienes/bienes.component';
import { BuscarBienesComponent } from './components/buscar-bienes/buscar-bienes.component';
import { ClaseBienesComponent } from './components/clase-bienes/clase-bienes.component';
import { EdificiosComponent } from './components/edificios/edificios.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EstadosBienesComponent } from './components/estados-bienes/estados-bienes.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { MenuComponent } from './components/menu/menu.component';
import { PisosComponent } from './components/pisos/pisos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { UnidadesAdministrativasComponent } from './components/unidades-administrativas/unidades-administrativas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { BuscarUnidadesComponent } from './components/buscar-unidades/buscar-unidades.component';
import { BusquedaBienesComponent } from './components/busqueda-bienes/busqueda-bienes.component';
import { CargarAltasComponent } from './components/cargar-altas/cargar-altas.component';
import { TransferirBienesComponent } from './components/transferir-bienes/transferir-bienes.component';

const routes: Routes = [

  
  { path: 'uas', component: UnidadesAdministrativasComponent },
  { path: 'uas/:termino', component: BuscarUnidadesComponent},
  { path: 'edificios', component: EdificiosComponent },
  { path: 'bienes', component: BienesComponent },
  { path: 'busqueda-bienes', component: BuscarBienesComponent },
  { path: 'busqueda-bienes/:termino', component: BusquedaBienesComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'clases_bienes', component: ClaseBienesComponent },
  { path: 'estados_bienes', component: EstadosBienesComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'pisos', component: PisosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'transferir_bienes', component: TransferirBienesComponent },
  { path: 'cargar_altas', component: CargarAltasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'uas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
