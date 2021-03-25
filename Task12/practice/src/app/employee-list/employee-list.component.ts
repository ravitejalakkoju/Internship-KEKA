import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  constructor() { 
    this.employees = [
      {name: 'Ravi', id:'e1'}
    ]
  }

  ngOnInit(): void {
  }

}
