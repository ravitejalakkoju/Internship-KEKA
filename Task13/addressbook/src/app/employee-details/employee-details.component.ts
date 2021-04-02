import { Component, OnInit} from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { RouteService } from '../route.service';

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
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee);
  }

  deleteEmployee(): void{
    this.employeeService.deleteEmployee(this.employee);
    this.router.navigate(['/']);
  }
}
