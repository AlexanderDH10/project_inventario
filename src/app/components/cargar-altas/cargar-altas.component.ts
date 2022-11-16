import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargar-altas',
  templateUrl: './cargar-altas.component.html',
  styleUrls: ['./cargar-altas.component.css']
})
export class CargarAltasComponent implements OnInit {

  constructor() { }

  url:any
  ngOnInit(): void {
  }

  altaSmai( event:any){
    console.log(event.target.files[0].name);
    
  }

}
