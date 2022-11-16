import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  constructor( private http:HttpClient ) { }

  getEmpleado(empleado:string){
    const URL = 'http://localhost:4000/api/empleados/'+ empleado.toUpperCase();
    return this.http.get(URL);
  }
}
