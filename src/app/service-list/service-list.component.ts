import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  servicesList = [];

  constructor(private servicesService: ServicesService) {

  }

  ngOnInit() {
		this.servicesList = this.servicesService.items;
	}
}
