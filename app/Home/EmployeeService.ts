import {Injectable,OnInit} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    _url:string= 'apiData/employeedata.json';
 constructor(private _http:Http){
     console.log('Employee Service Called..');
 }
 
 getEmployeeData(){
   return  this._http.get(this._url)
   .map((response:Response) => response.json());
 }
}