import { Pipe, PipeTransform } from '@angular/core';
import { STATUS } from '../constants/constants';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    return STATUS[value];
  }

}
