import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios
import { UasService } from './services/uas.service';
import { BuscarBienesService } from './services/buscar-bienes.service';
import { CargarAltasService } from './services/cargar-altas.service';
import { CargarBienService } from './services/cargar-bien.service';



//Busqueda


//Modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { BienesComponent } from './components/bienes/bienes.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { BuscarBienesComponent } from './components/buscar-bienes/buscar-bienes.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { UnidadesAdministrativasComponent } from './components/unidades-administrativas/unidades-administrativas.component';
import { EdificiosComponent } from './components/edificios/edificios.component';
import { LoginComponent } from './components/login/login.component';
import { ClaseBienesComponent } from './components/clase-bienes/clase-bienes.component';
import { EstadosBienesComponent } from './components/estados-bienes/estados-bienes.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { PisosComponent } from './components/pisos/pisos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { BuscarUnidadesComponent } from './components/buscar-unidades/buscar-unidades.component';
import { BusquedaBienesComponent } from './components/busqueda-bienes/busqueda-bienes.component';
import { HttpClientModule } from '@angular/common/http';
import { CargarAltasComponent } from './components/cargar-altas/cargar-altas.component';
import { FormsModule } from '@angular/forms';
import { TransferirBienesComponent } from './components/transferir-bienes/transferir-bienes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    BienesComponent,
    EmpleadosComponent,
    BuscarBienesComponent,
    BienvenidaComponent,
    UnidadesAdministrativasComponent,
    EdificiosComponent,
    LoginComponent,
    ClaseBienesComponent,
    EstadosBienesComponent,
    MarcasComponent,
    PisosComponent,
    ProveedoresComponent,
    UsuariosComponent,
    AdministracionComponent,
    BuscarUnidadesComponent,
    BusquedaBienesComponent,
    CargarAltasComponent,
    TransferirBienesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    UasService,
    BuscarBienesService,
    CargarAltasService,
    CargarBienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
