
import { Component } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';
@Component({
  selector: 'app-root',
  //template: `<h1>Random Company</h1>
 // <app-employee></app-employee>`,
  template:`
  <li routerLinkActive="active current"><a routerLink="/server">server</a></li>
    <li routerLinkActive="active current"><a routerLink="/servers">servers</a></li>
    <router-outlet></router-outlet>
   
    `,
  providers: [EmployeeserviceService]
})
export class AppComponent { }