import { Component } from '@angular/core';
import { BilleteraComponent } from './billetera/billetera';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BilleteraComponent],
  template: '<app-billetera />'
})
export class App {}