import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UasService } from 'src/app/services/uas.service';

@Component({
  selector: 'app-buscar-unidades',
  templateUrl: './buscar-unidades.component.html',
  styleUrls: ['./buscar-unidades.component.css']
})
export class BuscarUnidadesComponent implements OnInit {

  uas:any = [];
  termino!:string;

  constructor( private activatedRoute:ActivatedRoute, private _uasService:UasService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      //console.log( params['termino']);
      
      this.termino = params['termino'];
      this._uasService.getUasJson( params['termino']).subscribe((res) => {
        this.uas = res;
       }, err => { return err });
       console.log(this.uas);
      

    })
  }

  verUa( idx:number ){
    console.log( idx );
  }
  

}
