import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CargarBienService } from '../../services/cargar-bien.service';
import { UasService } from '../../services/uas.service';

@Component({
  selector: 'app-bienes',
  templateUrl: './bienes.component.html',
  styleUrls: ['./bienes.component.css']
})
export class BienesComponent implements OnInit {

  alert:boolean = false;
  bloquear:boolean = false;
  myForm?:any;
  unidades:any = [];
  descripcion?:string;

  clave_cabms:any = {
      
    Clave: '',
    "Partida Presupuestal": '',
    Subcuenta: '',
    Descripcion: ''
  }

  constructor(public _cargarBienService:CargarBienService, public _uasService:UasService) { }

  ngOnInit(): void {
    this.alert = false;
    this._uasService.getUas().subscribe((res) => {
      this.unidades = res;
      console.log(this.unidades);
     }, err => { return err });
     
  }

  agregarBien( form: NgForm){

    console.log(form.value);
    this.myForm = form.value;
    this._cargarBienService.createBien(form.value).subscribe(
      res =>{
        this.alert = true; 
        this.bloquear=true;
        console.log( res);
        
      },
      err => console.log(err)
    );
      
  }

  limpiar( form: NgForm ){
    form.reset();
    this.alert = false;
    this.bloquear= false;
  }

  cargarCabms(clave:string){

    

     this._uasService.cargarCabms(clave).subscribe(
      res => {
        this.clave_cabms = {
          ...res
        }
          this._cargarBienService.selectedBien['Descripcion CABMS'] = this.clave_cabms.Descripcion;
        console.log(this.clave_cabms.Descripcion);
      }
    );
    
  }

  

}
