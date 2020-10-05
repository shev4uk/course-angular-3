import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, order: boolean): any {
    console.log(order);
    function mySort(a, b) {
      return order ? a.price - b.price : b.price - a.price;
    }
    return value.sort(mySort);
  }

}
