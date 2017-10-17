//    import { Pipe, PipeTransform } from '@angular/core';
//    import * as _ from 'lodash'; 

//    @Pipe({
//     name: 'unique',
//      pure: false
//    })

//   export class UniquePipe implements PipeTransform {
//       transform(value: any): any{
//         console.log(value)
//            if(value!== undefined && value!== null){

//                return _.uniqBy(value, 'item_code') || _.uniqBy(value,'source');
//          }
//          return value;
//        }
//  }

import { Pipe, PipeTransform,Injectable,OnInit } from '@angular/core';
import * as _ from 'lodash'; 


@Pipe({
    name: 'unique',
    pure: false
})
@Injectable()
    export class UniquePipe implements PipeTransform {
        transform(items: any[], args: any[]): any {

        // lodash uniqBy function
        return _.uniqBy(items, args);
    }
}