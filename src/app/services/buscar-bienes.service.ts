import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BuscarBienesService {

  URL_API = 'http://localhost:4000/api/unificadas/';

  public bienes: any[] = [];
  bien:any = {};

  constructor(private http: HttpClient ) { }

  getDataBienes() {

    /*axios.get("../../assets/reporte4_1.json")
      .then((response:any) => {
        this.bienes = response.data;
        console.log(response.data);
      })*/

  }

  getBienes(folio:string){

    /*this.getDataBienes();
    return this.bienes;
    */
    
   return this.http.get(this.URL_API + folio);

  }

  buscarBienes( termino:string ){

    console.log("Servicio Trabajando buscar-bienes-service");
    let bienesArr: any [] = [];
    termino = termino.toLowerCase();

    for (let bien of this.bienes) {

      let nombre = bien.FOLIO.toString().toLowerCase();

      if (nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(termino) >= 0) {

        bienesArr.push(bien);

      }

    }

    if (termino === "*") {
      bienesArr = this.bienes;
    }
    

    return bienesArr;
  }

}
