import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'api/employees';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeesUrl)
    .pipe(catchError(this.handleError<Employee[]>('getEmployees', [])));
  }
  getEmployee(id: number): Observable<Employee>{
    const url = `${this.employeesUrl}/${id}`
    return this.http.get<Employee>(url).pipe(catchError(this.handleError<Employee>(`getEmployee id=${id}`)));
  }
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateEmployee'))
    );
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
      catchError(this.handleError<Employee>('addemployee'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error.message);
      return of(result as T);
    };
  }
}
