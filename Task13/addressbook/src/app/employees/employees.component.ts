import { Component, OnInit } from '@angular/core';

import { RouteService } from '../route.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
  }

};