import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { RouteService } from '../../route.service';
import { EmployeeService } from '../../employee.service';
import { EmployeeFormValidatorService } from '../employee-form-validator.service';

import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})

export class EmployeeFormComponent implements OnInit {
  action: string;
  add: boolean;
  employee: Employee = new Employee();

  employeeForm = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, this.formValidator.patternValidator(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/), 
      this.formValidator.duplicateValidator('email')]],
    'mobile': ['', [Validators.required,  this.formValidator.patternValidator(/^\d{10}/), 
        this.formValidator.duplicateValidator('mobile') ]] ,
    'landline': [''],
    'website': ['', this.formValidator.patternValidator(/www\.[a-z0-9.-]+\.[a-z]{2,}$/)],
    'address': ['', [Validators.required]]
  })


  constructor(
    private routeService: RouteService, 
    private activatedRoute: ActivatedRoute, 
    private employeeService: EmployeeService,
    private formValidator: EmployeeFormValidatorService,
    private route: Router,
    private location: Location,
    private fb: FormBuilder
  ){
    this.routeService.updateEmployeeId(0);
  }


  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.url;
    this.action = url[url.length-1].path;
    if(this.action == 'edit') {
      this.activatedRoute.paramMap.subscribe(params => this.getEmployee());
      this.add = false;
    }
    else {
      this.routeService.updateEmployeeId(0);
      this.add = true;
    }
    this.routeService.updateFormAction(this.add);
    this.employeeForm.patchValue(this.employee);
  }

  get name(){
    return this.employeeForm.get('name');
  }

  get email(){
    return this.employeeForm.get('email');
  }

  get mobile(){
    return this.employeeForm.get('mobile');
  }

  get website(){
    return this.employeeForm.get('website');
  }

  get address(){
    return this.employeeForm.get('address');
  }

  getEmployee(): void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.routeService.updateEmployeeId(id);
    this.employeeService.getEmployee()
      .subscribe(employee => this.employee = {...employee});
    if(Object.keys(this.employee).length === 0) this.route.navigate(['/']);
  }

  onSubmit(){
    this.add ? this.addEmployee() : this.saveEmployee();
  }

  addEmployee(): void{
    let id: number;
    this.employeeService.addEmployee(this.employeeForm.value as Employee).subscribe(returnId => id = returnId);
    this.route.navigate([`employees/${id}`]);
  }

  saveEmployee(): void{
    let id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.updateEmployee(this.employeeForm.value);
    this.route.navigate([`employees/${id}`]);
  }
  
  goBack(){
    this.location.back();
  }

}
