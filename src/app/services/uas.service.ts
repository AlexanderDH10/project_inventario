import { Injectable } from '@angular/core';
import axios from 'axios';
import { Unidad } from '../models/unidad';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UasService {

  URL_API = 'http://localhost:4000/api/unidades/';

  public uas: any[] = [];

  uasArr: any[] = [];

  selectedUnidad: Unidad = {
    clave_ur: '',
    clave_ur_sai: '',
    clave_ur_smai: '',
    nombre: '',
    comentarios:''
  }

  constructor(private http: HttpClient) {
    console.log('Servicio listo');
  }


  getUasJson(termino:string) {

    return this.http.get(this.URL_API + termino);

    /*axios.get("../../assets/unidades_a.json")
      .then((response: any) => {

        this.uas = response.data;
        console.log(response.data);
      });
      */
  }

  getUas() {

    //this.getUasJson();
    return this.http.get(this.URL_API);
  }

  buscarUnidades(termino: string) {

    let unidadesArr: any[] = [];
    termino = termino.toLowerCase();

    for (let ua of this.uas) {

      let nombre = ua.nombre.toString().toLowerCase();

      if (nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(termino) >= 0) {

        unidadesArr.push(ua);

      } else {

        let clave_ur = ua.clave_ur.toString().toLowerCase();
        if (clave_ur.normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(termino) >= 0) {

          unidadesArr.push(ua);

        } else {

          let clave_ur_sai = ua.clave_ur_sai.toString().toLowerCase();
          if (clave_ur_sai.normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(termino) >= 0) {

            unidadesArr.push(ua);

          } else {

            let clave_ur_smai = ua.clave_ur_smai.toString().toLowerCase();
            if (clave_ur_smai.normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(termino) >= 0) {

              unidadesArr.push(ua);

            }
          }
        }
      }
    }

    if (termino === "*") {
      unidadesArr = this.uas;
    }

    return unidadesArr;

  }

  agregarUnidades(unidad:Unidad){

    return this.http.post('http://localhost:4000/api/unidades', unidad);
    /*let data = JSON.stringify(unidad);

    fs.writeFile('../../assets/unidades_a.json', data, (err)=>{
      if(err) throw new Error('No se pudo grabar');
    });*/
  }

  cargarCabms(clave:string){

    return this.http.get('http://localhost:4000/api/cabms/'+ clave);
  }

   /*buscarUnidades( termino:string ){

    let unidadesArr: any[] = [];

  
    termino = termino.toLowerCase();

    for( let ua of this.uas){

      let nombre = ua.nombre.toLowerCase();

      if( nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, '').indexOf(termino) >= 0){

        unidadesArr.push(ua);

      }
    }

    return unidadesArr;

  }*/

  

}