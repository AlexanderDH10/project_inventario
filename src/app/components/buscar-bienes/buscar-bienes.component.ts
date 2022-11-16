import { Component, OnInit } from '@angular/core';
import { BuscarBienesService } from 'src/app/services/buscar-bienes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar-bienes',
  templateUrl: './buscar-bienes.component.html',
  styleUrls: ['./buscar-bienes.component.css']
})
export class BuscarBienesComponent implements OnInit {

  bienes: any [] = [];

  constructor( private router:Router, private _buscarBienesService:BuscarBienesService) { }

  ngOnInit(): void {

    //this.bienes = this._buscarBienesService.getBienes();

  }

  buscarBienes( termino:string ){

    

    this.router.navigate(['/busqueda-bienes', termino]);
  }

  

}
