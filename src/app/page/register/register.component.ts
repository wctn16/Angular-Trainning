import { Employee, Service } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [Service]
})
export class RegisterComponent implements OnInit {

  employee: Employee = {} as any;
  positions: string[] = [];
  states: string[] = [];

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
    this.states = service.getStates();
  }

  ngOnInit() {
  }

}
