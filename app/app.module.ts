import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import{RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import {HomeComponent} from './Home/Home.component';
import {AboutComponent} from './Home/About.component';
import {PageNotFoundComponent} from './PageNotFound.component';

const appRoute:Routes = [
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'',redirectTo:'/Home' ,pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  declarations: [AppComponent,HomeComponent,AboutComponent,PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    //RouterModule.forRoot(appRoute,{useHash:true})+
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}