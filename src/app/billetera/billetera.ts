import { Component } from '@angular/core';
import { Movimiento } from '../movimientos.model';
import { NuevoMovimientoComponent } from '../nuevo-movimiento/nuevo-movimiento';

@Component({
  selector: 'app-billetera',
  standalone: true,
  imports: [NuevoMovimientoComponent],
  templateUrl: './billetera.html'
})
export class BilleteraComponent {

  saldo = 250;

  movimientos: Movimiento[] = [];

  registrarMovimiento(nuevo: Movimiento): void {

    if (nuevo.tipo === 'Gasto') {

      this.saldo =
        Math.round(
          (this.saldo - nuevo.monto) * 100
        ) / 100;

    } else {

      this.saldo =
        Math.round(
          (this.saldo + nuevo.monto) * 100
        ) / 100;
    }

    this.movimientos = [
      nuevo,
      ...this.movimientos
    ];
  }
}