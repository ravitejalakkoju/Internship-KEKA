import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee'; 

import { EmployeeService } from '../../employee.service';
import { RouteService } from '../../route.service';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];
  
  ngOnInit(): void {
    this.getEmployees();
  }
  constructor(private employeeService: EmployeeService, private routeService: RouteService) {
  }

  getId(): number{
    let selectedId: number = 0;
    this.routeService.getEmployeeId().subscribe(id => selectedId = id);
    return selectedId;
  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }
}
