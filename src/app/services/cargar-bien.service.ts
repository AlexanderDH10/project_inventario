import { Injectable } from '@angular/core';
import { Bien } from '../models/bienes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargarBienService {

  selectedBien: Bien = {
    Sistema: '',
    'Año de Afectacion': '',
    'Clave CABMS': '',
    'Descripcion CABMS': '',
    Folio: '',
    Valor: '',
    'Unidad Responsable': '',
    'Clave UR SAI': '',
    'Clave UR SMAI': '',
    'No Empleado': '',
    'Nombre Empleado': '',
    'Status del Bien': '',
    Modelo: '',
    Serie: '',
    Marca: '',
    Proveedor: '',
    'Orden de Compra': '',
    'Numero de Factura': '',
    'Estado del Bien': '',
    'Tipo de Ingreso': '',
    Ubicacion: '',
    Edificio: '',
    Piso: '',
    'Partida Presupuestal': '',
    Subcuenta: ''
  };

  constructor(private http:HttpClient) { }

  createBien( Bien:Bien){
    
    return this.http.post('http://localhost:4000/api/unificadas', Bien);
  }

  transferBien( bien:any){
    return this.http.put('http://localhost:4000/api/unificadas', bien);
  }
}
