import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarBienesService } from 'src/app/services/buscar-bienes.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-busqueda-bienes',
  templateUrl: './busqueda-bienes.component.html',
  styleUrls: ['./busqueda-bienes.component.css']
})
export class BusquedaBienesComponent implements OnInit {

  bienes:any = [];
  termino!:string;

  constructor(private _buscarBienes:BuscarBienesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe( params => {
      //console.log( params['termino']);
      
      this.termino = params['termino'].toUpperCase();
      this._buscarBienes.getBienes( params['termino'] ).subscribe( (res) => {
        this.bienes = res;
        console.log(this.bienes);
       }, err => { return err });
      console.log(params['termino']);
      //console.log(this.bienes);

    })

    /*
    this._buscarBienes.getBienes().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    */
   //this._buscarBienes.getDataBienes();
  
  }
  name = 'ExcelSheet.xlsx';

  exportarAExcell(){
    console.log(this.bienes);
    
    //const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([[ 1, 2, 3, 4, 5, 6 ]]);
    
    let bienes_excel:any = [];

    for(let bien of this.bienes){
     bienes_excel.push({
      Sistema: bien.Sistema,
      'Año de Afectacion': bien['Año de Afectacion'],
      'Clave CABMS': bien['Clave CABMS'],
      'Descripcion CABMS': bien['Descripcion CABMS'],
      Folio: bien.Folio,
      Valor: bien.Valor,
      'Unidad Responsable': bien['Unidad Responsable'],
      'Clave UR SAI': bien['Clave UR SAI'],
      'Clave UR SMAI': bien['Clave UR SMAI'],
      'No Empleado': bien['No Empleado'],
      'Nombre Empleado': bien['Nombre Empleado'],
      'Status del Bien': bien['Status del Bien'],
      Modelo: bien.Modelo,
      Serie: bien.Serie,
      Marca: bien.Marca,
      Proveedor: bien.Proveedor,
      'Orden de Compra': bien['Orden de Compra'],
      'Numero de Factura': bien['Numero de Factura'],
      'Estado del Bien': bien['Estado del Bien'],
      'Tipo de Ingreso': bien['Tipo de Ingreso'],
      Ubicacion: bien.Ubicacion,
      Edificio: bien.Edificio,
      Piso: bien.Piso,
      'Partida Presupuestal': bien['Partida Presupuestal'],
      Subcuenta: bien.Subcuenta
    }) 
    
    
    }

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(bienes_excel);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    worksheet["!cols"] = [ { wch: 20 }, { wch: 10 }, { wch: 15 }, { wch: 15 }, { wch: 50 }, { wch: 25 }, { wch: 25 }, { wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 },{ wch: 25 } ];
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
    
    

  }

}
