import { Component, OnInit } from '@angular/core';
import { EmpleadosServiceService} from '../../services/empleados-service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public _empleadoService:EmpleadosServiceService) { }

  ngOnInit(): void {

  }

  agregarEmpleado(form:NgForm){
    console.log(form.value);
    
    this._empleadoService.cargarEmpleado(form.value).subscribe(
      res => {
        console.log('Empleado Agregado');
      },
      err => console.log(err)
      )
      
  }

}
