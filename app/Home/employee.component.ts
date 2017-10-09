import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './EmployeeService';

@Component({
  templateUrl: 'app/Home/employee.component.html',
})
export class EmployeeComponent implements OnInit{
     private employees:any = [];
     constructor(private _employeeService:EmployeeService){}

    ngOnInit(){
      this._employeeService.getEmployeeData().subscribe(data => this.employees = data);
    }
}