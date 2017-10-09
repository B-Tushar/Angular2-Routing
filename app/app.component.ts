import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>App Component</h1>
  <div style="padding:5px">
    <ul class="nav nav-tabs">
     <li routerLinkActive="active"><a routerLink="Home">Home</a></li>
     <li routerLinkActive="active"><a routerLink="About">About</a></li>
     <li routerLinkActive="active"><a routerLink="Employee">Employee</a></li>
    </ul>
    <router-outlet></router-outlet>
  </div>
  
  `,
})
export class AppComponent {
 
}