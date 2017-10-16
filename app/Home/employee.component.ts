import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './EmployeeService';
//import {DataTableDirectives} from 'angular2-datatable/datatable';

@Component({
  templateUrl: 'app/Home/employee.component.html',
})
export class EmployeeComponent implements OnInit{
     private apiData:any[];
     private month:any = [];
     private horizon:any=[];
     private information :any[];

     constructor(private _employeeService:EmployeeService){}

    ngOnInit(){
      this._employeeService.getEmployeeData().subscribe(data => this.month = data.data_month);
     this._employeeService.getEmployeeData().subscribe(data => this.horizon = data.data_horizon);
     this._employeeService.getEmployeeData().subscribe(data => this.information = data.data_plant);
 
       }
}