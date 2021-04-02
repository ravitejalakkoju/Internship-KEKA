import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  id?: Observable<number> = of(0);

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
  }

  updateEmployeeId(id: number): void{
    this.id = of(id);
  }

  getEmployeeId(): Observable<number>{
    return this.id;
  }

}
