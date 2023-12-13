import { Component } from '@angular/core';
import { Customer, Service } from 'src/app/page/data-binding/data-binding.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  customers: Customer[];
  constructor(private service: Service) {
    this.customers = service.getCustomers();
    console.log(this.customers)
  }
}

