import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tipo: string = "ingresoOperacion"
  descripcionInput: string
  valorInput: number
  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }
  tipoOperacion(evento){
    this.tipo = evento.target.value
  }
  agregarValor(){
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
    }
    if(this.tipo === "egresoOperacion"){
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
    }
  }
}
