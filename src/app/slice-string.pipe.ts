import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);
    return value.slice(0, args[0]) + '...';
  }

}
