import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'; 

import { EmployeeService } from '../employee.service';
import { RouteService } from '../route.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  selectId?: number;

  ngOnInit(): void {
    this.getEmployees();
  }
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private routeService: RouteService) {
  }

  getId(id: number): number{
    this.routeService.getEmployeeId().subscribe(id => this.selectId = id);
    return this.selectId;
  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }
}
