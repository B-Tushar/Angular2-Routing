import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import{RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import {HomeComponent} from './Home/Home.component';
import {AboutComponent} from './Home/About.component';
import {PageNotFoundComponent} from './PageNotFound.component';
import {EmployeeComponent} from './Home/employee.component';
import {HttpModule} from '@angular/http';
import {EmployeeService} from './Home/EmployeeService';
import {UniquePipe} from './UniquePipe';
import {uniqueSource} from './uniquePipe_Source';
//import {DataTableModule} from "angular2-datatable";

const appRoute:Routes = [
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Employee',component:EmployeeComponent},
  {path:'',redirectTo:'/Home' ,pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  declarations: [AppComponent,HomeComponent,AboutComponent,PageNotFoundComponent,EmployeeComponent,UniquePipe,uniqueSource],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
   // DataTableModule,
    //RouterModule.forRoot(appRoute,{useHash:true})+
    RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule {
}