import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    const t = +value;
    if (isNaN(t) || t < 0) {
      return '-:-';
    }
    return Math.trunc(t / 60) + ':' + Math.trunc(t % 60);
  }

}
