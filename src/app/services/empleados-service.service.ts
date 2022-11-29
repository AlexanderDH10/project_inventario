import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  Empleado:Empleado = {
    no_empleado: ''.toUpperCase(),
    nombre: ''.toUpperCase(),
    unidad_ad: ''
  }

  constructor( private http:HttpClient ) { }

  getEmpleado(empleado:string){
    const URL = 'http://localhost:4000/api/empleados/'+ empleado.toUpperCase();
    return this.http.get(URL);
  }

  cargarEmpleado( Empleado:Empleado){
    const URL = 'http://localhost:4000/api/empleados/';
    return this.http.post(URL, Empleado);

  }
}
