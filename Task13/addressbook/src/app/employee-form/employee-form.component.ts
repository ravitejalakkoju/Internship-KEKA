import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RouteService } from '../route.service';
import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})

export class EmployeeFormComponent implements OnInit {
  add: boolean = true;
  duplicateEmailExists: boolean = false;
  duplicateMobileExists: boolean = false;
  employee: Employee = {name: "", email: "", mobile: "", landline: "", website: "", address: "" } as Employee;


  constructor(
    private routeService: RouteService, 
    private activatedRoute: ActivatedRoute, 
    private employeeService: EmployeeService,
    private route: Router
  ){
    this.routeService.updateEmployeeId(0);
  }

  ngOnInit(): void {
    const action = this.activatedRoute.snapshot.url[0].path;
    this.add = ('add' === action);
    if(!this.add) this.activatedRoute.paramMap.subscribe(params => this.getEmployee());
  }

  getEmployee(): void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.routeService.updateEmployeeId(id);
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = {...employee});
    if(Object.keys(this.employee).length === 0) this.route.navigate(['/']);
  }

  onSubmit(){
    this.add ? this.addEmployee() : this.saveEmployee();
  }

  addEmployee(): void{
    let id: number;
    this.employeeService.addEmployee(this.employee as Employee).subscribe(returnId => id = returnId);
    this.route.navigate([`employees/${id}`]);
  }

  saveEmployee(): void{
    this.employeeService.updateEmployee(this.employee);
    this.route.navigate([`employees/${this.employee.id}`]);
  }


  checkDuplicateEmail(email: string, id: number): Boolean{
    this.duplicateEmailExists = this.employeeService.checkDuplicate('email',email, id);
    return this.duplicateEmailExists;
  }

  checkDuplicateMobile(mobile: string, id: number): Boolean{
    this.duplicateMobileExists = this.employeeService.checkDuplicate('mobile', mobile, id);
    return this.duplicateMobileExists;
  }
}
