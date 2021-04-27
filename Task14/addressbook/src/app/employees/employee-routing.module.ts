import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const employeeRoutes: Routes = [
    {path: 'add', component: EmployeeFormComponent},
    {path: ':id', component: EmployeeDetailsComponent},
    {path: ':id/edit', component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule { }
