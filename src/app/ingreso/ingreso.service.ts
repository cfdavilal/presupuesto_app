import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta de Coche', 500),
  ];
  
}
