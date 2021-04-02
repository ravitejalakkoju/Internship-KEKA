import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: 'employees', component: EmployeesComponent,
  children: [
    { path: 'add', component: EmployeeFormComponent },
    { path: ':id', component: EmployeeDetailsComponent},
    { path: ':id/edit', component: EmployeeFormComponent}
  ]
  },
  { path: '**', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
