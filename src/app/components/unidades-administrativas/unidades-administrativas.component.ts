import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UasService } from 'src/app/services/uas.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-unidades-administrativas',
  templateUrl: './unidades-administrativas.component.html',
  styleUrls: ['./unidades-administrativas.component.css']
})
export class UnidadesAdministrativasComponent implements OnInit {

uas:any = [];
myUnidad?:any;
alert:boolean = false;
nombreUnidad?:string;

constructor( public _uasServices: UasService, private router:Router ){

}

ngOnInit(): void {

    this.uas = this._uasServices.getUas();
    
}

buscarUnidad( termino:string ){

  this.router.navigate(['/uas', termino]);
}

verUa( idx:number ){
  console.log( idx );
}

agregarUnidad( form:NgForm ){
  console.log(form.value);
  this.nombreUnidad = this._uasServices.selectedUnidad.clave_ur;
  this.myUnidad = form.value;
  this._uasServices.agregarUnidades( form.value).subscribe(
    res => {
      this.alert = true; 
      form.reset();
      console.log( res);
    },
    err => console.log(err)
  );
}








}