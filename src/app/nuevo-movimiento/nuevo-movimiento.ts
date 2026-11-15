import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimiento, TipoMovimiento } from '../movimientos.model';

@Component({
  selector: 'app-nuevo-movimiento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-movimiento.html',
  styleUrl: './nuevo-movimiento.css'
})
export class NuevoMovimientoComponent {

  saldo = input.required<number>();

  movimientoValido = output<Movimiento>();

  tipo: TipoMovimiento = 'Recarga';

  monto: number | null = null;

  get montoInvalido(): boolean {
    return this.monto !== null && !(this.monto > 0);
  }

  get saldoInsuficiente(): boolean {
    return this.tipo === 'Gasto'
      && this.monto !== null
      && this.monto > this.saldo();
  }

  get formularioInvalido(): boolean {
    return this.monto === null
      || this.montoInvalido
      || this.saldoInsuficiente;
  }

  registrar(): void {

    if (this.formularioInvalido) {
      return;
    }

    this.movimientoValido.emit({
      tipo: this.tipo,
      monto: this.monto!
    });

    this.monto = null;
  }
}