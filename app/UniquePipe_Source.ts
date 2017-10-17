import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

 @Pipe({
    name: 'uniqueSource',
     pure: false
   })
  
  export class uniqueSource implements PipeTransform {
      transform(value: any): any{
        debugger
        console.log(value)
           if(value!== undefined && value!== null){
               return _.uniqBy(value, 'source');
         }
         return value;
       }
  }