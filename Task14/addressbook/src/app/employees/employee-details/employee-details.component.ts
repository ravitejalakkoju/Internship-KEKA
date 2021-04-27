import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../../employee.service';
import { RouteService } from '../../route.service';

import { Employee } from '../../employee';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employee?: Employee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private routeService: RouteService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe(params => this.ngOnInit());
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  ngOnDestroy(){
    this.routeService.updateEmployeeId(0);
  }

  getEmployee(): void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.routeService.updateEmployeeId(id);
    this.employeeService.getEmployee()
    .subscribe(employee => this.employee = employee);
  }

  deleteEmployee(): void{
    if(window.confirm('Are you sure that you want to delete this address ?')){
      this.employeeService.deleteEmployee(this.employee);
      this.router.navigate(['/']);
    }
  }
}
