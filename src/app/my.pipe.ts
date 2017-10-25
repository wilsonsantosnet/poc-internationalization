import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Pipe({ name: 'myPipe'})
export class MyPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {
  }
  transform(val) {
    return this.decimalPipe.transform(val, '1.2-2');
  }
}
