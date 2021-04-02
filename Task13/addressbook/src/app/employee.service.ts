import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  sortEmployees(){
    EMPLOYEES.sort((a,b) => a.name.localeCompare(b.name));
  }
  getEmployees(): Observable<Employee[]>{
    this.sortEmployees();
    const employees = of(EMPLOYEES);
    return employees;
  }
  getEmployee(id: number): Observable<Employee>{
    const employee = EMPLOYEES.find(e => e.id === id) as Employee;
    return of(employee);
  }
  addEmployee(employee: Employee): Observable<number>{
    employee.id = (EMPLOYEES.length > 0) ? Math.max.apply(Math, EMPLOYEES.map(e => e.id)) + 1 : 1;
    EMPLOYEES.push(employee);
    this.sortEmployees();
    return of(employee.id);
  }
  updateEmployee(employee: Employee){
    let employeeFound = EMPLOYEES.find(e => employee.id == e.id);
    Object.keys(employee).slice(1).forEach(el =>{
      employeeFound[el] = employee[el]
    })
  }
  deleteEmployee(employee: Employee){
    const index = EMPLOYEES.indexOf(employee);
    if(index != -1){
      EMPLOYEES.splice(index, 1);
    }
  }
  checkDuplicate(name: string, value: string, id: number = 0): boolean{
    let duplicateExist: boolean = false;
    EMPLOYEES.forEach(employee => {
      if(value === employee[name] && id !== employee.id) duplicateExist = true;
    });
    return duplicateExist;
  }
}
