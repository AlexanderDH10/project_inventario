import { Component, OnInit } from '@angular/core';
import { BuscarBienesService } from '../../services/buscar-bienes.service';
import { CargarBienService } from 'src/app/services/cargar-bien.service';
import { EmpleadosServiceService } from '../../services/empleados-service.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-transferir-bienes',
  templateUrl: './transferir-bienes.component.html',
  styleUrls: ['./transferir-bienes.component.css']
})
export class TransferirBienesComponent implements OnInit {

  bienes:any = [];
  empleado_data:any = {
    nombre: '',
    no_empleado: ''
  };
  folioBien?: string;
  alert:boolean = false;
  fail:boolean = false;
  noFoundBien:boolean = false;
  busquedaBien:boolean = false;
  busquedaEmpleado:boolean = false;
  transferir:boolean = true;
  bloquear:boolean = true;

  datosTransfer:any = {
    Folio: "",
    noEmpleado: "",
    nombreEmpleado:""
}


  constructor( private _empleadosService:EmpleadosServiceService,private _buscarBienes:BuscarBienesService, private _cargarBien:CargarBienService ) { 
    
  }

  ngOnInit(): void {
    
  }

  buscarBienes(folio:string){
    
    this.folioBien = folio;
    this._buscarBienes.getBienes( folio ).subscribe( ( res ) => {
      this.bienes = res;
     
      if(this.bienes.length == 0){
        this.noFoundBien = true;
        this.transferir = true;
        console.log(this.noFoundBien )
      } else {

      this.transferir = false;
      this.busquedaBien = true;
      console.log(this.bienes);

      this.noFoundBien = false;
    }
    
    }, err => { 
      this.transferir = false;
      return err 
    } )
  }

  buscarEmpleado(empleado:string){
    this._empleadosService.getEmpleado(empleado).subscribe( ( res ) => {
      
      this.empleado_data = res;
      if( this.empleado_data == null){ 
        
        this.empleado_data ={
          nombre: '',
          no_empleado: ''
        }
        this.transferir = false;
        this.fail = true;
      } else {
      
      this.transferir = false;
      this.busquedaEmpleado = true;
      this.datosTransfer = {

        Folio: this.folioBien,
        noEmpleado: this.empleado_data.no_empleado,
        nombreEmpleado: this.empleado_data.nombre
        
      }
      

      /*if(this.empleado_data == undefined || this.empleado_data == null){
        this.fail = true;
      }
      */

      this.fail = false;
      
    }
      console.log(this.empleado_data);
    }, err => { 
      this.fail = true;  
      return err 
    } )

  }

  transferirEmpleado(){
    this._cargarBien.transferBien(this.datosTransfer).subscribe((res) => {
      console.log(res)
      this.alert = true;
    }, err => { return err });
  }

  buscadorVacio(termino:string){

    if(termino == null || termino == ""){
      this.alert = false;
    }

  }

}
