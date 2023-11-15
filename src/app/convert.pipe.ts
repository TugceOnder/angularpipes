import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, type: string): unknown {
console.log(value);
switch (type){
  case 'km' :
    return  value*1.60934;
  
    case 'm' :
    return  value*1.60934*1000;

    case 'cm' :
    return  value*1.60934*1000*1000;

    default: // if else de ki else yapısı olarak düşüebiliriz
    throw new Error('Böyle bir deger yok')
}
   
  }

}
