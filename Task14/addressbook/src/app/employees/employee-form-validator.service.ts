import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormValidatorService {

  constructor(private employeeService: EmployeeService) { }
  patternValidator(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl):{[key: string]: any} | null => {
        const patternMatch = !(pattern.test(control.value) || control.value.length == 0);
        return patternMatch ? { 'pattern': {Value: control.value}} : null;
    } 
  }
 duplicateValidator(type: string): ValidatorFn {
    return (control: AbstractControl):{[key: string]: any} | null => {
        const duplicateExists = this.employeeService.checkDuplicate(type, control.value);
        return duplicateExists ? { 'duplicate': {Value: control.value}} : null;
    } 
  }
}
