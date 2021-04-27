import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of} from 'rxjs';
import { ActivatedRoute } from '@angular/router'

import { RouteService } from './route.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedId?: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private routeService: RouteService){}
  sortEmployees(){
    EMPLOYEES.sort((a,b) => a.name.localeCompare(b.name));
  }
  getEmployees(): Observable<Employee[]>{
    this.sortEmployees();
    const employees = of(EMPLOYEES);
    return employees;
  }
  getEmployee(): Observable<Employee>{
    this.routeService.getEmployeeId().subscribe((id: number) => this.selectedId = id);
    const employee = EMPLOYEES.find(e => e.id === this.selectedId) as Employee;
    return of(employee);
  }
  addEmployee(employee: Employee): Observable<number>{
    employee.id = (EMPLOYEES.length > 0) ? Math.max.apply(Math, EMPLOYEES.map(e => e.id)) + 1 : 1;
    EMPLOYEES.push(employee);
    this.sortEmployees();
    return of(employee.id);
  }
  updateEmployee(employee: Employee){
    let employeeFound = EMPLOYEES.find(e => this.selectedId == e.id);
    Object.keys(employee).forEach(el =>{
      employeeFound[el] = employee[el]
    })
  }
  deleteEmployee(employee: Employee){
    const index = EMPLOYEES.indexOf(employee);
    if(index != -1){
      EMPLOYEES.splice(index, 1);
    }
  }
  checkDuplicate(name: string, value: string): boolean{
    let duplicateExist: boolean = false;
    EMPLOYEES.forEach(employee => {
      if(value == employee[name] && this.selectedId !== employee.id) duplicateExist = true;
    });
    return duplicateExist;
  }
}
