import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'area'
})
export class AreaPipe implements PipeTransform {

  transform(radius: any, args: any): any {
    args = parseInt(args);
    return 3.14 * (args * args);
  }

}
