import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search: string): any {
    console.log(search);
    if (!search) {
      return value;
    }
    return value.filter((item) => item.name.includes(search));
  }

}
