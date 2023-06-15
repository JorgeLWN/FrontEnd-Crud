import { Component } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  empleados:Empleado[];

  constructor() { }

  ngOnInit(): void {
    this.empleados = [{
      "id":1,
      "nombre":"Soriano",
      "telefono" : "5543322345"
    },
    {
      "id":2,
      "nombre":"Juanito",
      "telefono" : "5578982345"
    }];
  }

}
